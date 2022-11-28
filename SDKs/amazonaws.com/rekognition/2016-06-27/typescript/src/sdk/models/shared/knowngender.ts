import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KnownGenderTypeEnum } from "./knowngendertypeenum";



// KnownGender
/** 
 * The known gender identity for the celebrity that matches the provided ID.
**/
export class KnownGender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: KnownGenderTypeEnum;
}
