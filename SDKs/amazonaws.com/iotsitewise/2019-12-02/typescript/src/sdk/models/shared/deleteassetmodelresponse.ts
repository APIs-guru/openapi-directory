import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetModelStatus } from "./assetmodelstatus";


export class DeleteAssetModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
