import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultMessage
/** 
 * Specifies the default message for all channels.
**/
export class DefaultMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;
}
