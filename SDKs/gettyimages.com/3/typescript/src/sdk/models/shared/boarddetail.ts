import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { Links } from "./links";
import { BoardPermissions } from "./boardpermissions";



export class BoardDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=assets", elemType: Asset })
  assets?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=comment_count" })
  commentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_last_updated" })
  dateLastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: BoardPermissions;
}
