import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetModelHierarchy
/** 
 * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
**/
export class AssetModelHierarchy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childAssetModelId" })
  childAssetModelId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
