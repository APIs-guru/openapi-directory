import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A request to list the <a>SqlInjectionMatchSet</a> objects created by the current AWS account.
**/
export declare class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
    limit?: number;
    nextMarker?: string;
}
