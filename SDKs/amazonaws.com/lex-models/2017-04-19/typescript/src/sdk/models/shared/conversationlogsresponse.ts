import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogSettingsResponse } from "./logsettingsresponse";



// ConversationLogsResponse
/** 
 * Contains information about conversation log settings.
**/
export class ConversationLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=logSettings", elemType: LogSettingsResponse })
  logSettings?: LogSettingsResponse[];
}
