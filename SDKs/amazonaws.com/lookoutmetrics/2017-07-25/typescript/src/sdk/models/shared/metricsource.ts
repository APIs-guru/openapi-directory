import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppFlowConfig } from "./appflowconfig";
import { CloudWatchConfig } from "./cloudwatchconfig";
import { RdsSourceConfig } from "./rdssourceconfig";
import { RedshiftSourceConfig } from "./redshiftsourceconfig";
import { S3SourceConfig } from "./s3sourceconfig";


// MetricSource
/** 
 * Contains information about source data used to generate a metric.
**/
export class MetricSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppFlowConfig" })
  appFlowConfig?: AppFlowConfig;

  @Metadata({ data: "json, name=CloudWatchConfig" })
  cloudWatchConfig?: CloudWatchConfig;

  @Metadata({ data: "json, name=RDSSourceConfig" })
  rdsSourceConfig?: RdsSourceConfig;

  @Metadata({ data: "json, name=RedshiftSourceConfig" })
  redshiftSourceConfig?: RedshiftSourceConfig;

  @Metadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: S3SourceConfig;
}
