import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoAccountingDomainWhitelistEntry } from "./apicoredtoaccountingdomainwhitelistentry";


export class ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.ApiCoreDtoAccountingDomainWhitelistEntry })
  entities?: ApiCoreDtoAccountingDomainWhitelistEntry[];
}
