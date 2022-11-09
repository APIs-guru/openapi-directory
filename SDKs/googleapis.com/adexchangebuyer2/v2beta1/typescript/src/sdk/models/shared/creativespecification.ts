import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdSize } from "./adsize";
import { AdSize } from "./adsize";


// CreativeSpecification
/** 
 * Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
**/
export class CreativeSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeCompanionSizes", elemType: shared.AdSize })
  creativeCompanionSizes?: AdSize[];

  @Metadata({ data: "json, name=creativeSize" })
  creativeSize?: AdSize;
}
