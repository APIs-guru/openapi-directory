import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


// UserList
/** 
 * Users List
**/
export class UserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sum" })
  sum: number;

  @Metadata({ data: "json, name=users", elemType: shared.User })
  users: User[];
}
