import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { RoleList } from "./rolelist";



// Group
/** 
 * Group information
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cntUsers" })
  cntUsers: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=groupRoles" })
  groupRoles?: RoleList;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
