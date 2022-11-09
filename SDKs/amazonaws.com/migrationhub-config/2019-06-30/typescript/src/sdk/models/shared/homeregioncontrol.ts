import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";


// HomeRegionControl
/** 
 * A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
**/
export class HomeRegionControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlId" })
  controlId?: string;

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @Metadata({ data: "json, name=RequestedTime" })
  requestedTime?: Date;

  @Metadata({ data: "json, name=Target" })
  target?: Target;
}
