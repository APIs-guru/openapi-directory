import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SampleValue } from "./samplevalue";
import { SampleValue } from "./samplevalue";


// SlotTypeValue
/** 
 * Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
**/
export class SlotTypeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=sampleValue" })
  sampleValue?: SampleValue;

  @Metadata({ data: "json, name=synonyms", elemType: shared.SampleValue })
  synonyms?: SampleValue[];
}
