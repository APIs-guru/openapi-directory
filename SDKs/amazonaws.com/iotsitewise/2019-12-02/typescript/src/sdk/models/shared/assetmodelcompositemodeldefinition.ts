import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetModelCompositeModelDefinition
/** 
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
**/
export class AssetModelCompositeModelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
