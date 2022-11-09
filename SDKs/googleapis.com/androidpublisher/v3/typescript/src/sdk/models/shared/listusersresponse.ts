import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


// ListUsersResponse
/** 
 * A response containing one or more users with access to an account.
**/
export class ListUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=users", elemType: shared.User })
  users?: User[];
}
