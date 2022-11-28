import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateDomainContactPrivacyRequest
/** 
 * The UpdateDomainContactPrivacy request includes the following elements.
**/
export class UpdateDomainContactPrivacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminPrivacy" })
  adminPrivacy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrantPrivacy" })
  registrantPrivacy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TechPrivacy" })
  techPrivacy?: boolean;
}
