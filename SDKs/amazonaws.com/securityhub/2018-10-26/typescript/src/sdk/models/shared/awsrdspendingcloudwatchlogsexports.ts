import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsPendingCloudWatchLogsExports
/** 
 * Identifies the log types to enable and disable.
**/
export class AwsRdsPendingCloudWatchLogsExports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogTypesToDisable" })
  logTypesToDisable?: string[];

  @SpeakeasyMetadata({ data: "json, name=LogTypesToEnable" })
  logTypesToEnable?: string[];
}
