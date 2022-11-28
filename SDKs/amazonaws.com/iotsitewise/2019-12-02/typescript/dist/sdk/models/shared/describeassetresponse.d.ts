import { SpeakeasyBase } from "../../../internal/utils";
import { AssetCompositeModel } from "./assetcompositemodel";
import { AssetHierarchy } from "./assethierarchy";
import { AssetProperty } from "./assetproperty";
import { AssetStatus } from "./assetstatus";
export declare class DescribeAssetResponse extends SpeakeasyBase {
    assetArn: string;
    assetCompositeModels?: AssetCompositeModel[];
    assetCreationDate: Date;
    assetHierarchies: AssetHierarchy[];
    assetId: string;
    assetLastUpdateDate: Date;
    assetModelId: string;
    assetName: string;
    assetProperties: AssetProperty[];
    assetStatus: AssetStatus;
}
