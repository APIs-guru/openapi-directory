import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuppressViolationRequest
/** 
 * This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
**/
export class SuppressViolationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;
}
