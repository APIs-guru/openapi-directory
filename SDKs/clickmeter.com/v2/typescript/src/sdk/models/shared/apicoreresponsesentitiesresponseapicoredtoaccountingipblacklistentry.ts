import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoAccountingIpBlacklistEntry } from "./apicoredtoaccountingipblacklistentry";


export class ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.ApiCoreDtoAccountingIpBlacklistEntry })
  entities?: ApiCoreDtoAccountingIpBlacklistEntry[];
}
