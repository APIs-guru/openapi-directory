import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetHierarchyInfo } from "./assethierarchyinfo";
import { AssetRelationshipTypeEnum } from "./assetrelationshiptypeenum";
/**
 * Contains information about assets that are related to one another.
**/
export declare class AssetRelationshipSummary extends SpeakeasyBase {
    hierarchyInfo?: AssetHierarchyInfo;
    relationshipType: AssetRelationshipTypeEnum;
}
