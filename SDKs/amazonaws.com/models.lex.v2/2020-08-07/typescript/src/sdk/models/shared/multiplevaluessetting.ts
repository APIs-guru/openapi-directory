import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultipleValuesSetting
/** 
 * Indicates whether a slot can return multiple values.
**/
export class MultipleValuesSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMultipleValues" })
  allowMultipleValues?: boolean;
}
