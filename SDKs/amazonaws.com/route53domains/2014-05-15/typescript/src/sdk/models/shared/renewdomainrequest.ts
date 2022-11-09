import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RenewDomainRequest
/** 
 * A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
**/
export class RenewDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentExpiryYear" })
  currentExpiryYear: number;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=DurationInYears" })
  durationInYears?: number;
}
