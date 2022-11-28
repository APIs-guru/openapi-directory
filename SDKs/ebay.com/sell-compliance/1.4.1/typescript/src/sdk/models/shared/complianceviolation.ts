import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceDetail } from "./compliancedetail";



// ComplianceViolation
/** 
 * This type is used by each listing violation that is returned under the listingViolations container.
**/
export class ComplianceViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=violations", elemType: ComplianceDetail })
  violations?: ComplianceDetail[];
}
