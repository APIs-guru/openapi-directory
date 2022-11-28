import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceViolation } from "./complianceviolation";



// PagedComplianceViolationCollection
/** 
 * This type is the base response type of the getListingViolations method.
**/
export class PagedComplianceViolationCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=listingViolations", elemType: ComplianceViolation })
  listingViolations?: ComplianceViolation[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
