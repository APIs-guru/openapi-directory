import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetStatus } from "./assetstatus";
export declare class CreateAssetResponse extends SpeakeasyBase {
    assetArn: string;
    assetId: string;
    assetStatus: AssetStatus;
}
