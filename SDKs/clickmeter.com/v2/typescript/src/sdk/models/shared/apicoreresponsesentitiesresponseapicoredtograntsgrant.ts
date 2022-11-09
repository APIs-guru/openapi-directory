import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";


export class ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.ApiCoreDtoGrantsGrant })
  entities?: ApiCoreDtoGrantsGrant[];
}
