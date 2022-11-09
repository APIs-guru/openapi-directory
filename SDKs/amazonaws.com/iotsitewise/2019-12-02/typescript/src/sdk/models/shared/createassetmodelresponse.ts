import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetModelStatus } from "./assetmodelstatus";


export class CreateAssetModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelArn" })
  assetModelArn: string;

  @Metadata({ data: "json, name=assetModelId" })
  assetModelId: string;

  @Metadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
