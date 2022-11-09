import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuppressViolationRequest
/** 
 * This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
**/
export class SuppressViolationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;
}
