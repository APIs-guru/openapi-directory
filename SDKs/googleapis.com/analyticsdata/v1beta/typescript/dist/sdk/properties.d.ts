import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * analyticsdataPropertiesBatchRunPivotReports - Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.
    **/
    analyticsdataPropertiesBatchRunPivotReports(req: operations.AnalyticsdataPropertiesBatchRunPivotReportsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesBatchRunPivotReportsResponse>;
    /**
     * analyticsdataPropertiesBatchRunReports - Returns multiple reports in a batch. All reports must be for the same GA4 Property.
    **/
    analyticsdataPropertiesBatchRunReports(req: operations.AnalyticsdataPropertiesBatchRunReportsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesBatchRunReportsResponse>;
    /**
     * analyticsdataPropertiesCheckCompatibility - This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.
    **/
    analyticsdataPropertiesCheckCompatibility(req: operations.AnalyticsdataPropertiesCheckCompatibilityRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesCheckCompatibilityResponse>;
    /**
     * analyticsdataPropertiesGetMetadata - Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property such as `country` and `totalUsers`.
    **/
    analyticsdataPropertiesGetMetadata(req: operations.AnalyticsdataPropertiesGetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesGetMetadataResponse>;
    /**
     * analyticsdataPropertiesRunPivotReport - Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
    **/
    analyticsdataPropertiesRunPivotReport(req: operations.AnalyticsdataPropertiesRunPivotReportRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesRunPivotReportResponse>;
    /**
     * analyticsdataPropertiesRunRealtimeReport - Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).
    **/
    analyticsdataPropertiesRunRealtimeReport(req: operations.AnalyticsdataPropertiesRunRealtimeReportRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesRunRealtimeReportResponse>;
    /**
     * analyticsdataPropertiesRunReport - Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).
    **/
    analyticsdataPropertiesRunReport(req: operations.AnalyticsdataPropertiesRunReportRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsdataPropertiesRunReportResponse>;
}
