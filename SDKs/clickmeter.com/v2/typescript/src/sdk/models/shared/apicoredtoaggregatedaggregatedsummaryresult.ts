import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoAggregatedAggregatedResult } from "./apicoredtoaggregatedaggregatedresult";


export class ApiCoreDtoAggregatedAggregatedSummaryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=result", elemType: shared.ApiCoreDtoAggregatedAggregatedResult })
  result?: ApiCoreDtoAggregatedAggregatedResult[];
}
