import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AppFlowConfig" })
  appFlowConfig?: AppFlowConfig;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchConfig" })
  cloudWatchConfig?: CloudWatchConfig;

  @SpeakeasyMetadata({ data: "json, name=RDSSourceConfig" })
  rdsSourceConfig?: RdsSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=RedshiftSourceConfig" })
  redshiftSourceConfig?: RedshiftSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=S3SourceConfig" })
  s3SourceConfig?: S3SourceConfig;
}
