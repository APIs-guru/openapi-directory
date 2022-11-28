import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupEntity
/** 
 * List Groups
**/
export class GroupEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_ids" })
  adminIds?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=user_ids" })
  userIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=usernames" })
  usernames?: string[];
}
