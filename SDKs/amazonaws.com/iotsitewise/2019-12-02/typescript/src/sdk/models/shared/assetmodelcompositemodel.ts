import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetModelCompositeModel
/** 
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
**/
export class AssetModelCompositeModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
