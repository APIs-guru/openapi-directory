import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoClickStreamHit } from "./apicoredtoclickstreamhit";



export class ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: ApiCoreDtoClickStreamHit })
  entities?: ApiCoreDtoClickStreamHit[];
}
