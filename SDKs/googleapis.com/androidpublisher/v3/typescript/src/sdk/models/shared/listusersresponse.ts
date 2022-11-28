import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// ListUsersResponse
/** 
 * A response containing one or more users with access to an account.
**/
export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: User })
  users?: User[];
}
