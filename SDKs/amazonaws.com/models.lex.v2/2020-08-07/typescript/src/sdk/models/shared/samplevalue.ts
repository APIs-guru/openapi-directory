import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SampleValue
/** 
 * Defines one of the values for a slot type.
**/
export class SampleValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value: string;
}
