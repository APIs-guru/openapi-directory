import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetHierarchy
/** 
 * Describes an asset hierarchy that contains a hierarchy's name and ID.
**/
export class AssetHierarchy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
