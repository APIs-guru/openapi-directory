import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceDetail } from "./compliancedetail";


// ComplianceViolation
/** 
 * This type is used by each listing violation that is returned under the listingViolations container.
**/
export class ComplianceViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=violations", elemType: shared.ComplianceDetail })
  violations?: ComplianceDetail[];
}
