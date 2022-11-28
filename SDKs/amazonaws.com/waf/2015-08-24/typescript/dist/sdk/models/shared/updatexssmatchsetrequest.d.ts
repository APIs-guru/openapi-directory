import { SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSetUpdate } from "./xssmatchsetupdate";
/**
 * A request to update an <a>XssMatchSet</a>.
**/
export declare class UpdateXssMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    updates: XssMatchSetUpdate[];
    xssMatchSetId: string;
}
