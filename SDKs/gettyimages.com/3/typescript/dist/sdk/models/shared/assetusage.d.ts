import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies the id, usage Quantity, and date of when an asset was used.
**/
export declare class AssetUsage extends SpeakeasyBase {
    assetId?: string;
    quantity?: number;
    usageDate?: Date;
}
