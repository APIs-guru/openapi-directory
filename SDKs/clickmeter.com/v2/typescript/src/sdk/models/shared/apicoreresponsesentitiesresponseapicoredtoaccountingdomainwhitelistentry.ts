import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAccountingDomainWhitelistEntry } from "./apicoredtoaccountingdomainwhitelistentry";



export class ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: ApiCoreDtoAccountingDomainWhitelistEntry })
  entities?: ApiCoreDtoAccountingDomainWhitelistEntry[];
}
