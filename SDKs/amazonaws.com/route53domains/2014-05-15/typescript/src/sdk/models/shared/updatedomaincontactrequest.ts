import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";


// UpdateDomainContactRequest
/** 
 * The UpdateDomainContact request includes the following elements.
**/
export class UpdateDomainContactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminContact" })
  adminContact?: ContactDetail;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=RegistrantContact" })
  registrantContact?: ContactDetail;

  @Metadata({ data: "json, name=TechContact" })
  techContact?: ContactDetail;
}
