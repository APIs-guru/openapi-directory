import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultMessage
/** 
 * Specifies the default message for all channels.
**/
export class DefaultMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;
}
