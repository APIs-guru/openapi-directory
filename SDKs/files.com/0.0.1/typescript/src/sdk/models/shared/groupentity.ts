import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupEntity
/** 
 * List Groups
**/
export class GroupEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_ids" })
  adminIds?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=user_ids" })
  userIds?: number[];

  @Metadata({ data: "json, name=usernames" })
  usernames?: string[];
}
