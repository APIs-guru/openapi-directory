import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStatus } from "./assetmodelstatus";



export class DeleteAssetModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
