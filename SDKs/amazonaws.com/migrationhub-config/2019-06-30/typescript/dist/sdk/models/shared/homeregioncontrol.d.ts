import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";
/**
 * A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
**/
export declare class HomeRegionControl extends SpeakeasyBase {
    controlId?: string;
    homeRegion?: string;
    requestedTime?: Date;
    target?: Target;
}
