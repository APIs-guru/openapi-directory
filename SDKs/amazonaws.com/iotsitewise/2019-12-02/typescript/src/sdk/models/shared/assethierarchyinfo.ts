import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetHierarchyInfo
/** 
 * Contains information about a parent asset and a child asset that are related through an asset hierarchy.
**/
export class AssetHierarchyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=childAssetId" })
  childAssetId?: string;

  @Metadata({ data: "json, name=parentAssetId" })
  parentAssetId?: string;
}
