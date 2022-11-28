import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SampleUtterance
/** 
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
**/
export class SampleUtterance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=utterance" })
  utterance: string;
}
