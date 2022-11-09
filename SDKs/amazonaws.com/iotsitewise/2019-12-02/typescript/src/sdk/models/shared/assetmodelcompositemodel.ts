import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetModelCompositeModel
/** 
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
**/
export class AssetModelCompositeModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;

  @Metadata({ data: "json, name=type" })
  type: string;
}
