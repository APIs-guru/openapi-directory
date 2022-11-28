import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
export declare class DeleteSqlInjectionMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    sqlInjectionMatchSetId: string;
}
