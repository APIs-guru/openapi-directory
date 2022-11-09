import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendingOptions
/** 
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
export class SendingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}
