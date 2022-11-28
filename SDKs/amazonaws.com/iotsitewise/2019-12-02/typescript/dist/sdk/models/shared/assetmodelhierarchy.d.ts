import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
**/
export declare class AssetModelHierarchy extends SpeakeasyBase {
    childAssetModelId: string;
    id?: string;
    name: string;
}
