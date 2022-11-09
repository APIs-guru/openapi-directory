import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListedAccess } from "./listedaccess";


export class ListAccessesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accesses", elemType: shared.ListedAccess })
  accesses: ListedAccess[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
