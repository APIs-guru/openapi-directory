import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KnownGenderTypeEnum } from "./knowngendertypeenum";


// KnownGender
/** 
 * The known gender identity for the celebrity that matches the provided ID.
**/
export class KnownGender extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: KnownGenderTypeEnum;
}
