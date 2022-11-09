import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberTypeEnum } from "./membertypeenum";


// Delegate
/** 
 * The name of the attribute, which is one of the values defined in the UserAttribute enumeration.
**/
export class Delegate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Type" })
  type: MemberTypeEnum;
}
