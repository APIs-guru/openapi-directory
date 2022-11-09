import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsPendingCloudWatchLogsExports
/** 
 * Identifies the log types to enable and disable.
**/
export class AwsRdsPendingCloudWatchLogsExports extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogTypesToDisable" })
  logTypesToDisable?: string[];

  @Metadata({ data: "json, name=LogTypesToEnable" })
  logTypesToEnable?: string[];
}
