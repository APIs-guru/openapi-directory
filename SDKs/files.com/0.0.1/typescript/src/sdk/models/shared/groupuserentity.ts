import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupUserEntity
/** 
 * Create Group User
**/
export class GroupUserEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin" })
  admin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=group_name" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=usernames" })
  usernames?: string[];
}
