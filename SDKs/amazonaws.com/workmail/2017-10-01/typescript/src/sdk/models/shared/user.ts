import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";
import { UserRoleEnum } from "./userroleenum";



// User
/** 
 * The representation of an Amazon WorkMail user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @SpeakeasyMetadata({ data: "json, name=UserRole" })
  userRole?: UserRoleEnum;
}
