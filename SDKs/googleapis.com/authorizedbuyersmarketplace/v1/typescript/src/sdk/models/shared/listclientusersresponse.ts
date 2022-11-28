import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";



// ListClientUsersResponse
/** 
 * Response message for the list method.
**/
export class ListClientUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientUsers", elemType: ClientUser })
  clientUsers?: ClientUser[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
