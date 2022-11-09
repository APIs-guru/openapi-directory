import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetModelHierarchy
/** 
 * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
**/
export class AssetModelHierarchy extends SpeakeasyBase {
  @Metadata({ data: "json, name=childAssetModelId" })
  childAssetModelId: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
