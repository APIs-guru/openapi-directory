import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultipleValuesSetting
/** 
 * Indicates whether a slot can return multiple values.
**/
export class MultipleValuesSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMultipleValues" })
  allowMultipleValues?: boolean;
}
