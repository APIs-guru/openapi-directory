import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SampleValue } from "./samplevalue";



// SlotTypeValue
/** 
 * Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
**/
export class SlotTypeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sampleValue" })
  sampleValue?: SampleValue;

  @SpeakeasyMetadata({ data: "json, name=synonyms", elemType: SampleValue })
  synonyms?: SampleValue[];
}
