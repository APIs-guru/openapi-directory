import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
import { MemberTypeEnum } from "./membertypeenum";


// Member
/** 
 * The representation of a user or group.
**/
export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @Metadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @Metadata({ data: "json, name=Type" })
  type?: MemberTypeEnum;
}
