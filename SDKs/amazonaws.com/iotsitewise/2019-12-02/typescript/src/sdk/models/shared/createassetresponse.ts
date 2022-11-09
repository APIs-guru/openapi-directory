import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetStatus } from "./assetstatus";


export class CreateAssetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetArn" })
  assetArn: string;

  @Metadata({ data: "json, name=assetId" })
  assetId: string;

  @Metadata({ data: "json, name=assetStatus" })
  assetStatus: AssetStatus;
}
