import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { RoleList } from "./rolelist";
import { UserInfo } from "./userinfo";


// Group
/** 
 * Group information
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=cntUsers" })
  cntUsers: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=groupRoles" })
  groupRoles?: RoleList;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
