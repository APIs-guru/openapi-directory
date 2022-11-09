import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Value
/** 
 * The value of a slot.
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=interpretedValue" })
  interpretedValue: string;

  @Metadata({ data: "json, name=originalValue" })
  originalValue?: string;

  @Metadata({ data: "json, name=resolvedValues" })
  resolvedValues?: string[];
}
