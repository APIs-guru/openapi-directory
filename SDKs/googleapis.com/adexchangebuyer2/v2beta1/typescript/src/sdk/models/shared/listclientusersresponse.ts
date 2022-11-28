import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";



export class ListClientUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: ClientUser })
  users?: ClientUser[];
}
