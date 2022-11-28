import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckDomainTransferabilityRequest
/** 
 * The CheckDomainTransferability request contains the following elements.
**/
export class CheckDomainTransferabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthCode" })
  authCode?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
