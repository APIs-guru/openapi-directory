import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoardAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId: string;
}
