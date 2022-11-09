import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListedUser } from "./listeduser";


export class ListUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=Users", elemType: shared.ListedUser })
  users: ListedUser[];
}
