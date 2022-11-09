import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetHierarchy } from "./assethierarchy";
import { AssetStatus } from "./assetstatus";
/**
 * Contains a summary of an associated asset.
**/
export declare class AssociatedAssetsSummary extends SpeakeasyBase {
    arn: string;
    assetModelId: string;
    creationDate: Date;
    hierarchies: AssetHierarchy[];
    id: string;
    lastUpdateDate: Date;
    name: string;
    status: AssetStatus;
}
