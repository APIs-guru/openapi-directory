import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetModelCompositeModel } from "./assetmodelcompositemodel";
import { AssetModelHierarchy } from "./assetmodelhierarchy";
import { AssetModelProperty } from "./assetmodelproperty";
import { AssetModelStatus } from "./assetmodelstatus";
export declare class DescribeAssetModelResponse extends SpeakeasyBase {
    assetModelArn: string;
    assetModelCompositeModels?: AssetModelCompositeModel[];
    assetModelCreationDate: Date;
    assetModelDescription: string;
    assetModelHierarchies: AssetModelHierarchy[];
    assetModelId: string;
    assetModelLastUpdateDate: Date;
    assetModelName: string;
    assetModelProperties: AssetModelProperty[];
    assetModelStatus: AssetModelStatus;
}
