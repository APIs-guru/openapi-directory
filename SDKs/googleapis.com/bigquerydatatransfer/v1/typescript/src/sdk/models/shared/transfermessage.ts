import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TransferMessageSeverityEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}


// TransferMessage
/** 
 * Represents a user facing message for a particular data transfer run.
**/
export class TransferMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageText" })
  messageText?: string;

  @SpeakeasyMetadata({ data: "json, name=messageTime" })
  messageTime?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: TransferMessageSeverityEnum;
}
