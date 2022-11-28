import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetHierarchyInfo } from "./assethierarchyinfo";
import { AssetRelationshipTypeEnum } from "./assetrelationshiptypeenum";



// AssetRelationshipSummary
/** 
 * Contains information about assets that are related to one another.
**/
export class AssetRelationshipSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hierarchyInfo" })
  hierarchyInfo?: AssetHierarchyInfo;

  @SpeakeasyMetadata({ data: "json, name=relationshipType" })
  relationshipType: AssetRelationshipTypeEnum;
}
