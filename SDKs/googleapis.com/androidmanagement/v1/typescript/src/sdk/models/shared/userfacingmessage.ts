import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserFacingMessage
/** 
 * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
**/
export class UserFacingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultMessage" })
  defaultMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedMessages" })
  localizedMessages?: Map<string, string>;
}
