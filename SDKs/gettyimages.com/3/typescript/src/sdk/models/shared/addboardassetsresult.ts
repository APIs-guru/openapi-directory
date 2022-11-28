import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoardAsset } from "./boardasset";



export class AddBoardAssetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets_added", elemType: BoardAsset })
  assetsAdded?: BoardAsset[];

  @SpeakeasyMetadata({ data: "json, name=assets_not_added" })
  assetsNotAdded?: string[];
}
