import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



// ZeppelinMonitoringConfigurationDescription
/** 
 * The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinMonitoringConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogLevel" })
  logLevel?: LogLevelEnum;
}
