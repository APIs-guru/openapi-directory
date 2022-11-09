import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";


// TransferDomainRequest
/** 
 * The TransferDomain request includes the following elements.
**/
export class TransferDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminContact" })
  adminContact: ContactDetail;

  @Metadata({ data: "json, name=AuthCode" })
  authCode?: string;

  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=DurationInYears" })
  durationInYears: number;

  @Metadata({ data: "json, name=IdnLangCode" })
  idnLangCode?: string;

  @Metadata({ data: "json, name=Nameservers", elemType: shared.Nameserver })
  nameservers?: Nameserver[];

  @Metadata({ data: "json, name=PrivacyProtectAdminContact" })
  privacyProtectAdminContact?: boolean;

  @Metadata({ data: "json, name=PrivacyProtectRegistrantContact" })
  privacyProtectRegistrantContact?: boolean;

  @Metadata({ data: "json, name=PrivacyProtectTechContact" })
  privacyProtectTechContact?: boolean;

  @Metadata({ data: "json, name=RegistrantContact" })
  registrantContact: ContactDetail;

  @Metadata({ data: "json, name=TechContact" })
  techContact: ContactDetail;
}
