import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SampleValue
/** 
 * Defines one of the values for a slot type.
**/
export class SampleValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
