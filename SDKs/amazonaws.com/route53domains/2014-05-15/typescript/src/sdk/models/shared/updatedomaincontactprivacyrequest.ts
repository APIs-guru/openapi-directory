import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateDomainContactPrivacyRequest
/** 
 * The UpdateDomainContactPrivacy request includes the following elements.
**/
export class UpdateDomainContactPrivacyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminPrivacy" })
  adminPrivacy?: boolean;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=RegistrantPrivacy" })
  registrantPrivacy?: boolean;

  @Metadata({ data: "json, name=TechPrivacy" })
  techPrivacy?: boolean;
}
