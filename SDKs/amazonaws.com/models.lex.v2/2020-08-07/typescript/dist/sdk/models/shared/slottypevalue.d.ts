import { SpeakeasyBase } from "../../../internal/utils";
import { SampleValue } from "./samplevalue";
/**
 * Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
**/
export declare class SlotTypeValue extends SpeakeasyBase {
    sampleValue?: SampleValue;
    synonyms?: SampleValue[];
}
