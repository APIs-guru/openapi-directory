import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckDomainTransferabilityRequest
/** 
 * The CheckDomainTransferability request contains the following elements.
**/
export class CheckDomainTransferabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthCode" })
  authCode?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
