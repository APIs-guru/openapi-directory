import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppSummary } from "./appsummary";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";


export class CreateAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appSummary" })
  appSummary?: AppSummary;

  @Metadata({ data: "json, name=serverGroups", elemType: shared.ServerGroup })
  serverGroups?: ServerGroup[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
