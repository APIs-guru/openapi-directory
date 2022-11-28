import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetStatus } from "./assetstatus";



export class DeleteAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
