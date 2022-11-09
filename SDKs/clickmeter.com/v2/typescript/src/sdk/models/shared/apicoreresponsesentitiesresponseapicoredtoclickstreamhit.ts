import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoClickStreamHit } from "./apicoredtoclickstreamhit";


export class ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.ApiCoreDtoClickStreamHit })
  entities?: ApiCoreDtoClickStreamHit[];
}
