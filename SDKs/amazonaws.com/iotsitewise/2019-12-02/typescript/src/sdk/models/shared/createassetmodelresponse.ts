import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStatus } from "./assetmodelstatus";



export class CreateAssetModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelArn" })
  assetModelArn: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
