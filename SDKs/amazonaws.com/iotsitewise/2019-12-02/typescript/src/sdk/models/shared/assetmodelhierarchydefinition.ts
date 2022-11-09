import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetModelHierarchyDefinition
/** 
 * Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
**/
export class AssetModelHierarchyDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=childAssetModelId" })
  childAssetModelId: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
