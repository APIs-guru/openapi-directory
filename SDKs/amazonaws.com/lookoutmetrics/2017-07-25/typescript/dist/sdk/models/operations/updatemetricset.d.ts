import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMetricSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}
/**
 * Contains information about source data used to generate a metric.
**/
export declare class UpdateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
    appFlowConfig?: shared.AppFlowConfig;
    cloudWatchConfig?: shared.CloudWatchConfig;
    rdsSourceConfig?: shared.RdsSourceConfig;
    redshiftSourceConfig?: shared.RedshiftSourceConfig;
    s3SourceConfig?: shared.S3SourceConfig;
}
/**
 * Contains information about the column used to track time in a source data file.
**/
export declare class UpdateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
    columnFormat?: string;
    columnName?: string;
}
export declare class UpdateMetricSetRequestBody extends SpeakeasyBase {
    dimensionList?: string[];
    metricList?: shared.Metric[];
    metricSetArn: string;
    metricSetDescription?: string;
    metricSetFrequency?: UpdateMetricSetRequestBodyMetricSetFrequencyEnum;
    metricSource?: UpdateMetricSetRequestBodyMetricSource;
    offset?: number;
    timestampColumn?: UpdateMetricSetRequestBodyTimestampColumn;
}
export declare class UpdateMetricSetRequest extends SpeakeasyBase {
    headers: UpdateMetricSetHeaders;
    request: UpdateMetricSetRequestBody;
}
export declare class UpdateMetricSetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateMetricSetResponse?: shared.UpdateMetricSetResponse;
    validationException?: any;
}
