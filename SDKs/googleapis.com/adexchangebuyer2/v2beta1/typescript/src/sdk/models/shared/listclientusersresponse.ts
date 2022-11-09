import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientUser } from "./clientuser";


export class ListClientUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=users", elemType: shared.ClientUser })
  users?: ClientUser[];
}
