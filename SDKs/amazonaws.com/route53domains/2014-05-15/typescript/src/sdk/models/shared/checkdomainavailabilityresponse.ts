import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainAvailabilityEnum } from "./domainavailabilityenum";


// CheckDomainAvailabilityResponse
/** 
 * The CheckDomainAvailability response includes the following elements.
**/
export class CheckDomainAvailabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Availability" })
  availability: DomainAvailabilityEnum;
}
