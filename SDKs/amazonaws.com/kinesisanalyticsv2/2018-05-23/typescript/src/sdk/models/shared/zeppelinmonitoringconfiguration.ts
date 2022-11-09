import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


// ZeppelinMonitoringConfiguration
/** 
 * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
**/
export class ZeppelinMonitoringConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogLevel" })
  logLevel: LogLevelEnum;
}
