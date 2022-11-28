import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RenewDomainRequest
/** 
 * A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.
**/
export class RenewDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentExpiryYear" })
  currentExpiryYear: number;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=DurationInYears" })
  durationInYears?: number;
}
