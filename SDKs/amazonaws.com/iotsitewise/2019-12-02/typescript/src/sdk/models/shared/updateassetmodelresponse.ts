import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetModelStatus } from "./assetmodelstatus";


export class UpdateAssetModelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelStatus" })
  assetModelStatus: AssetModelStatus;
}
