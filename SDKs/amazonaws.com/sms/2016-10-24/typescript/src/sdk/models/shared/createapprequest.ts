import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";


export class CreateAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=serverGroups", elemType: shared.ServerGroup })
  serverGroups?: ServerGroup[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
