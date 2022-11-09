import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceViolation } from "./complianceviolation";


// PagedComplianceViolationCollection
/** 
 * This type is the base response type of the getListingViolations method.
**/
export class PagedComplianceViolationCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=listingViolations", elemType: shared.ComplianceViolation })
  listingViolations?: ComplianceViolation[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
