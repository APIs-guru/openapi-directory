import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupUserEntity
/** 
 * Create Group User
**/
export class GroupUserEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin" })
  admin?: boolean;

  @Metadata({ data: "json, name=group_id" })
  groupId?: number;

  @Metadata({ data: "json, name=group_name" })
  groupName?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: number;

  @Metadata({ data: "json, name=usernames" })
  usernames?: string[];
}
