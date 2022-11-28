import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";



// UpdateDomainContactRequest
/** 
 * The UpdateDomainContact request includes the following elements.
**/
export class UpdateDomainContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminContact" })
  adminContact?: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrantContact" })
  registrantContact?: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=TechContact" })
  techContact?: ContactDetail;
}
