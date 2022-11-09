import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SampleUtterance
/** 
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
**/
export class SampleUtterance extends SpeakeasyBase {
  @Metadata({ data: "json, name=utterance" })
  utterance: string;
}
