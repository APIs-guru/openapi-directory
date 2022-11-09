import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogSettingsResponse } from "./logsettingsresponse";


// ConversationLogsResponse
/** 
 * Contains information about conversation log settings.
**/
export class ConversationLogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamRoleArn" })
  iamRoleArn?: string;

  @Metadata({ data: "json, name=logSettings", elemType: shared.LogSettingsResponse })
  logSettings?: LogSettingsResponse[];
}
