import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";



// TransferDomainRequest
/** 
 * The TransferDomain request includes the following elements.
**/
export class TransferDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminContact" })
  adminContact: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=AuthCode" })
  authCode?: string;

  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=DurationInYears" })
  durationInYears: number;

  @SpeakeasyMetadata({ data: "json, name=IdnLangCode" })
  idnLangCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Nameservers", elemType: Nameserver })
  nameservers?: Nameserver[];

  @SpeakeasyMetadata({ data: "json, name=PrivacyProtectAdminContact" })
  privacyProtectAdminContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PrivacyProtectRegistrantContact" })
  privacyProtectRegistrantContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PrivacyProtectTechContact" })
  privacyProtectTechContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RegistrantContact" })
  registrantContact: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=TechContact" })
  techContact: ContactDetail;
}
