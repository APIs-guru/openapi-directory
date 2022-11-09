import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoAggregatedAggregatedResult } from "./apicoredtoaggregatedaggregatedresult";


export class ApiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.ApiCoreDtoAggregatedAggregatedResult })
  entities?: ApiCoreDtoAggregatedAggregatedResult[];
}
