import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";


// RegisterDomainRequest
/** 
 * The RegisterDomain request includes the following elements.
**/
export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminContact" })
  adminContact: ContactDetail;

  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=DurationInYears" })
  durationInYears: number;

  @Metadata({ data: "json, name=IdnLangCode" })
  idnLangCode?: string;

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
