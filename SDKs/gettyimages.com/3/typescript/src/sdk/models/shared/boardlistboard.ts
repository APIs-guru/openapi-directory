import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";


export class BoardListBoard extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @Metadata({ data: "json, name=board_relationship" })
  boardRelationship?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_last_updated" })
  dateLastUpdated?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hero_asset" })
  heroAsset?: Asset;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
