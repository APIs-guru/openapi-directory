import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
export declare class DeleteXssMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    xssMatchSetId: string;
}
