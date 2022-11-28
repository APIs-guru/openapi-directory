import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAggregatedAggregatedResult } from "./apicoredtoaggregatedaggregatedresult";



export class ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: ApiCoreDtoAggregatedAggregatedResult })
  entities?: ApiCoreDtoAggregatedAggregatedResult[];
}
