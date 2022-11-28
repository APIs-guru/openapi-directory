import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdSize } from "./adsize";



// CreativeSpecification
/** 
 * Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
**/
export class CreativeSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeCompanionSizes", elemType: AdSize })
  creativeCompanionSizes?: AdSize[];

  @SpeakeasyMetadata({ data: "json, name=creativeSize" })
  creativeSize?: AdSize;
}
