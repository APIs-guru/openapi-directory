import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// UserList
/** 
 * Users List
**/
export class UserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: User })
  users: User[];
}
