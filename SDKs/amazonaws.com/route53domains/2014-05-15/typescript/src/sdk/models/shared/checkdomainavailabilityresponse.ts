import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainAvailabilityEnum } from "./domainavailabilityenum";



// CheckDomainAvailabilityResponse
/** 
 * The CheckDomainAvailability response includes the following elements.
**/
export class CheckDomainAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Availability" })
  availability: DomainAvailabilityEnum;
}
