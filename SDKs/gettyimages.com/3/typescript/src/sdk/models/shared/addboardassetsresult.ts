import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoardAsset } from "./boardasset";


export class AddBoardAssetsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets_added", elemType: shared.BoardAsset })
  assetsAdded?: BoardAsset[];

  @Metadata({ data: "json, name=assets_not_added" })
  assetsNotAdded?: string[];
}
