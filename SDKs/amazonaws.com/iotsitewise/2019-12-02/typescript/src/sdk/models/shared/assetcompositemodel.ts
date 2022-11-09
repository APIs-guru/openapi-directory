import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetCompositeModel
/** 
 * Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
**/
export class AssetCompositeModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=properties" })
  properties: any;

  @Metadata({ data: "json, name=type" })
  type: string;
}
