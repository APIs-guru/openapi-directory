import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserFacingMessage
/** 
 * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
**/
export class UserFacingMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultMessage" })
  defaultMessage?: string;

  @Metadata({ data: "json, name=localizedMessages" })
  localizedMessages?: Map<string, string>;
}
