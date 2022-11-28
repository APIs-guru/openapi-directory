import { SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
/**
 * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
**/
export declare class RowAccessPolicy extends SpeakeasyBase {
    creationTime?: string;
    etag?: string;
    filterPredicate?: string;
    lastModifiedTime?: string;
    rowAccessPolicyReference?: RowAccessPolicyReference;
}
