import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";
import { Links } from "./links";
import { BoardPermissions } from "./boardpermissions";


export class BoardDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @Metadata({ data: "json, name=assets", elemType: shared.Asset })
  assets?: Asset[];

  @Metadata({ data: "json, name=comment_count" })
  commentCount?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_last_updated" })
  dateLastUpdated?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: BoardPermissions;
}
