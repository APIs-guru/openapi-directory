import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSummary } from "./appsummary";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";



export class GetAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appSummary" })
  appSummary?: AppSummary;

  @SpeakeasyMetadata({ data: "json, name=serverGroups", elemType: ServerGroup })
  serverGroups?: ServerGroup[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
