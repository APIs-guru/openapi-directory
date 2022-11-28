import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetStatus } from "./assetstatus";



export class UpdateAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
