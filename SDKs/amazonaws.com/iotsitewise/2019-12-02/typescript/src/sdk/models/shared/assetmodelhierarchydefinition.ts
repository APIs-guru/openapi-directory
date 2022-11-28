import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetModelHierarchyDefinition
/** 
 * Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
**/
export class AssetModelHierarchyDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childAssetModelId" })
  childAssetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
