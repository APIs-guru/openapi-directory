import { SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSet } from "./sqlinjectionmatchset";
/**
 * The response to a <code>CreateSqlInjectionMatchSet</code> request.
**/
export declare class CreateSqlInjectionMatchSetResponse extends SpeakeasyBase {
    changeToken?: string;
    sqlInjectionMatchSet?: SqlInjectionMatchSet;
}
