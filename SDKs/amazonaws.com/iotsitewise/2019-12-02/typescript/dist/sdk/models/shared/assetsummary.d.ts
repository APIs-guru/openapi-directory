import { SpeakeasyBase } from "../../../internal/utils";
import { AssetHierarchy } from "./assethierarchy";
import { AssetStatus } from "./assetstatus";
/**
 * Contains a summary of an asset.
**/
export declare class AssetSummary extends SpeakeasyBase {
    arn: string;
    assetModelId: string;
    creationDate: Date;
    hierarchies: AssetHierarchy[];
    id: string;
    lastUpdateDate: Date;
    name: string;
    status: AssetStatus;
}
