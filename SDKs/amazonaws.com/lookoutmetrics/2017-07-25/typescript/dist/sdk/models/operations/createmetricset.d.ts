import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateMetricSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum CreateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}
/**
 * Contains information about source data used to generate a metric.
**/
export declare class CreateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
    appFlowConfig?: shared.AppFlowConfig;
    cloudWatchConfig?: shared.CloudWatchConfig;
    rdsSourceConfig?: shared.RdsSourceConfig;
    redshiftSourceConfig?: shared.RedshiftSourceConfig;
    s3SourceConfig?: shared.S3SourceConfig;
}
/**
 * Contains information about the column used to track time in a source data file.
**/
export declare class CreateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
    columnFormat?: string;
    columnName?: string;
}
export declare class CreateMetricSetRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    dimensionList?: string[];
    metricList: shared.Metric[];
    metricSetDescription?: string;
    metricSetFrequency?: CreateMetricSetRequestBodyMetricSetFrequencyEnum;
    metricSetName: string;
    metricSource: CreateMetricSetRequestBodyMetricSource;
    offset?: number;
    tags?: Map<string, string>;
    timestampColumn?: CreateMetricSetRequestBodyTimestampColumn;
    timezone?: string;
}
export declare class CreateMetricSetRequest extends SpeakeasyBase {
    headers: CreateMetricSetHeaders;
    request: CreateMetricSetRequestBody;
}
export declare class CreateMetricSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createMetricSetResponse?: shared.CreateMetricSetResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
