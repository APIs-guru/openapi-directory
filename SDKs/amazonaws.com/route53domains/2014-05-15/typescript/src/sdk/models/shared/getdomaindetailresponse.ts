import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";



// GetDomainDetailResponse
/** 
 * The GetDomainDetail response includes the following elements.
**/
export class GetDomainDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AbuseContactEmail" })
  abuseContactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=AbuseContactPhone" })
  abuseContactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=AdminContact" })
  adminContact: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=AdminPrivacy" })
  adminPrivacy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoRenew" })
  autoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DnsSec" })
  dnsSec?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Nameservers", elemType: Nameserver })
  nameservers: Nameserver[];

  @SpeakeasyMetadata({ data: "json, name=RegistrantContact" })
  registrantContact: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=RegistrantPrivacy" })
  registrantPrivacy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RegistrarName" })
  registrarName?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrarUrl" })
  registrarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistryDomainId" })
  registryDomainId?: string;

  @SpeakeasyMetadata({ data: "json, name=Reseller" })
  reseller?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusList" })
  statusList?: string[];

  @SpeakeasyMetadata({ data: "json, name=TechContact" })
  techContact: ContactDetail;

  @SpeakeasyMetadata({ data: "json, name=TechPrivacy" })
  techPrivacy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=WhoIsServer" })
  whoIsServer?: string;
}
