import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListedAccess } from "./listedaccess";



export class ListAccessesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accesses", elemType: ListedAccess })
  accesses: ListedAccess[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
