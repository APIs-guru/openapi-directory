import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetModelCompositeModelDefinition
/** 
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
**/
export class AssetModelCompositeModelDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=type" })
  type: string;
}
