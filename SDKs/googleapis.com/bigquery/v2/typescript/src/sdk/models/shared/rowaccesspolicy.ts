import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";



// RowAccessPolicy
/** 
 * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
**/
export class RowAccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=filterPredicate" })
  filterPredicate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rowAccessPolicyReference" })
  rowAccessPolicyReference?: RowAccessPolicyReference;
}
