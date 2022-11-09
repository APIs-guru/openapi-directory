import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetStatus } from "./assetstatus";


export class DeleteAssetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
