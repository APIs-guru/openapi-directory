import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


// ZeppelinMonitoringConfigurationDescription
/** 
 * The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinMonitoringConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogLevel" })
  logLevel?: LogLevelEnum;
}
