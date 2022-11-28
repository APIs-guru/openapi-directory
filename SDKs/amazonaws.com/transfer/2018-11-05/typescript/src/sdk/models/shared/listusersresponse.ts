import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListedUser } from "./listeduser";



export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=Users", elemType: ListedUser })
  users: ListedUser[];
}
