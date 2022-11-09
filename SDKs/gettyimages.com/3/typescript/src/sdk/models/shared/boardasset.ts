import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BoardAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_id" })
  assetId: string;
}
