import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientUser } from "./clientuser";


// ListClientUsersResponse
/** 
 * Response message for the list method.
**/
export class ListClientUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientUsers", elemType: shared.ClientUser })
  clientUsers?: ClientUser[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
