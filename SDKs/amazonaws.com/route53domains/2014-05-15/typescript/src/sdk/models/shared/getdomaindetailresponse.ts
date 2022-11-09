import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";
import { ContactDetail } from "./contactdetail";
import { ContactDetail } from "./contactdetail";


// GetDomainDetailResponse
/** 
 * The GetDomainDetail response includes the following elements.
**/
export class GetDomainDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AbuseContactEmail" })
  abuseContactEmail?: string;

  @Metadata({ data: "json, name=AbuseContactPhone" })
  abuseContactPhone?: string;

  @Metadata({ data: "json, name=AdminContact" })
  adminContact: ContactDetail;

  @Metadata({ data: "json, name=AdminPrivacy" })
  adminPrivacy?: boolean;

  @Metadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=DnsSec" })
  dnsSec?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=Nameservers", elemType: shared.Nameserver })
  nameservers: Nameserver[];

  @Metadata({ data: "json, name=RegistrantContact" })
  registrantContact: ContactDetail;

  @Metadata({ data: "json, name=RegistrantPrivacy" })
  registrantPrivacy?: boolean;

  @Metadata({ data: "json, name=RegistrarName" })
  registrarName?: string;

  @Metadata({ data: "json, name=RegistrarUrl" })
  registrarUrl?: string;

  @Metadata({ data: "json, name=RegistryDomainId" })
  registryDomainId?: string;

  @Metadata({ data: "json, name=Reseller" })
  reseller?: string;

  @Metadata({ data: "json, name=StatusList" })
  statusList?: string[];

  @Metadata({ data: "json, name=TechContact" })
  techContact: ContactDetail;

  @Metadata({ data: "json, name=TechPrivacy" })
  techPrivacy?: boolean;

  @Metadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @Metadata({ data: "json, name=WhoIsServer" })
  whoIsServer?: string;
}
