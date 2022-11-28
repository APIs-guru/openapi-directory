import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



export class BoardListBoard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_count" })
  assetCount?: number;

  @SpeakeasyMetadata({ data: "json, name=board_relationship" })
  boardRelationship?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_last_updated" })
  dateLastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hero_asset" })
  heroAsset?: Asset;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
