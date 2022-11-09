import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogLevelEnum } from "./loglevelenum";


// ZeppelinMonitoringConfigurationUpdate
/** 
 * Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinMonitoringConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogLevelUpdate" })
  logLevelUpdate: LogLevelEnum;
}
