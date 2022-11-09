import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetHierarchy
/** 
 * Describes an asset hierarchy that contains a hierarchy's name and ID.
**/
export class AssetHierarchy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
