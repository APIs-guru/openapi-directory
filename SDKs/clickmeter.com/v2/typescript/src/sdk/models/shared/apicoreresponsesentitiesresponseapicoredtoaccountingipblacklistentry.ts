import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAccountingIpBlacklistEntry } from "./apicoredtoaccountingipblacklistentry";



export class ApiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: ApiCoreDtoAccountingIpBlacklistEntry })
  entities?: ApiCoreDtoAccountingIpBlacklistEntry[];
}
