import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Property } from "./property";



// CompositeModelProperty
/** 
 * Contains information about a composite model property on an asset.
**/
export class CompositeModelProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetProperty" })
  assetProperty: Property;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
