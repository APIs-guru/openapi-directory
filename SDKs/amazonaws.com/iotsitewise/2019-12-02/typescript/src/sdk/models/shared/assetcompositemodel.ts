import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetCompositeModel
/** 
 * Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
**/
export class AssetCompositeModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
