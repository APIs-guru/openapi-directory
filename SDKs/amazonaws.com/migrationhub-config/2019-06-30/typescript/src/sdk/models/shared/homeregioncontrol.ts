import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



// HomeRegionControl
/** 
 * A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
**/
export class HomeRegionControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlId" })
  controlId?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedTime" })
  requestedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: Target;
}
