import { SpeakeasyBase } from "../../../internal/utils";
import { ApiOperation } from "./apioperation";
/**
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.
**/
export declare class IngressTo extends SpeakeasyBase {
    operations?: ApiOperation[];
    resources?: string[];
}
