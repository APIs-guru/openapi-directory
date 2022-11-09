import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetHierarchyInfo } from "./assethierarchyinfo";
import { AssetRelationshipTypeEnum } from "./assetrelationshiptypeenum";


// AssetRelationshipSummary
/** 
 * Contains information about assets that are related to one another.
**/
export class AssetRelationshipSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=hierarchyInfo" })
  hierarchyInfo?: AssetHierarchyInfo;

  @Metadata({ data: "json, name=relationshipType" })
  relationshipType: AssetRelationshipTypeEnum;
}
