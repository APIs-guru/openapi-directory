import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Value
/** 
 * The value of a slot.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interpretedValue" })
  interpretedValue: string;

  @SpeakeasyMetadata({ data: "json, name=originalValue" })
  originalValue?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvedValues" })
  resolvedValues?: string[];
}
