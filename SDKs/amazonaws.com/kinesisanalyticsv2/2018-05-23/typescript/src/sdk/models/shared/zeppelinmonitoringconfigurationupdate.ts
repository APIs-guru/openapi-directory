import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";



// ZeppelinMonitoringConfigurationUpdate
/** 
 * Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.
**/
export class ZeppelinMonitoringConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogLevelUpdate" })
  logLevelUpdate: LogLevelEnum;
}
