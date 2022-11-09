import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Property } from "./property";


// CompositeModelProperty
/** 
 * Contains information about a composite model property on an asset.
**/
export class CompositeModelProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetProperty" })
  assetProperty: Property;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
