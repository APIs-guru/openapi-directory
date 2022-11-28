import { SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSetUpdate } from "./sqlinjectionmatchsetupdate";
/**
 * A request to update a <a>SqlInjectionMatchSet</a>.
**/
export declare class UpdateSqlInjectionMatchSetRequest extends SpeakeasyBase {
    changeToken: string;
    sqlInjectionMatchSetId: string;
    updates: SqlInjectionMatchSetUpdate[];
}
