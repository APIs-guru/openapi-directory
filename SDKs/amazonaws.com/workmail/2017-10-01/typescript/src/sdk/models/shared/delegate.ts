import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberTypeEnum } from "./membertypeenum";



// Delegate
/** 
 * The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
**/
export class Delegate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: MemberTypeEnum;
}
