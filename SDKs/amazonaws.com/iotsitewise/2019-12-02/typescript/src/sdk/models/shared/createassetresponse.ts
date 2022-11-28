import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetStatus } from "./assetstatus";



export class CreateAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetArn" })
  assetArn: string;

  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId: string;

  @SpeakeasyMetadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
