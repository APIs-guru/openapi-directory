import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerGroup } from "./servergroup";
import { Tag } from "./tag";



export class UpdateAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=serverGroups", elemType: ServerGroup })
  serverGroups?: ServerGroup[];

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
