import { SpeakeasyBase } from "../../../internal/utils/utils";
import { XssMatchSet } from "./xssmatchset";
/**
 * The response to a <code>CreateXssMatchSet</code> request.
**/
export declare class CreateXssMatchSetResponse extends SpeakeasyBase {
    changeToken?: string;
    xssMatchSet?: XssMatchSet;
}
