import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
import { UserRoleEnum } from "./userroleenum";


export class DescribeUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserRole" })
  userRole?: UserRoleEnum;
}
