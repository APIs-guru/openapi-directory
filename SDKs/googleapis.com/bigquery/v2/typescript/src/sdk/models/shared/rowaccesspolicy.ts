import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";


// RowAccessPolicy
/** 
 * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
**/
export class RowAccessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=filterPredicate" })
  filterPredicate?: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=rowAccessPolicyReference" })
  rowAccessPolicyReference?: RowAccessPolicyReference;
}
