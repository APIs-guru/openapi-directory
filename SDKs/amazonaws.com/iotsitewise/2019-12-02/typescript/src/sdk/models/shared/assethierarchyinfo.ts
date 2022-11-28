import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetHierarchyInfo
/** 
 * Contains information about a parent asset and a child asset that are related through an asset hierarchy.
**/
export class AssetHierarchyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childAssetId" })
  childAssetId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentAssetId" })
  parentAssetId?: string;
}
