import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TransferMessageSeverityEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// TransferMessage
/** 
 * Represents a user facing message for a particular data transfer run.
**/
export class TransferMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageText" })
  messageText?: string;

  @Metadata({ data: "json, name=messageTime" })
  messageTime?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: TransferMessageSeverityEnum;
}
