import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppFlowConfig } from "./appflowconfig";
import { CloudWatchConfig } from "./cloudwatchconfig";
import { RdsSourceConfig } from "./rdssourceconfig";
import { RedshiftSourceConfig } from "./redshiftsourceconfig";
import { S3SourceConfig } from "./s3sourceconfig";
/**
 * Contains information about source data used to generate a metric.
**/
export declare class MetricSource extends SpeakeasyBase {
    appFlowConfig?: AppFlowConfig;
    cloudWatchConfig?: CloudWatchConfig;
    rdsSourceConfig?: RdsSourceConfig;
    redshiftSourceConfig?: RedshiftSourceConfig;
    s3SourceConfig?: S3SourceConfig;
}
