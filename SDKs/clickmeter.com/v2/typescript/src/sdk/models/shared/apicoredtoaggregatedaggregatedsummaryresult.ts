import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAggregatedAggregatedResult } from "./apicoredtoaggregatedaggregatedresult";



export class ApiCoreDtoAggregatedAggregatedSummaryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: ApiCoreDtoAggregatedAggregatedResult })
  result?: ApiCoreDtoAggregatedAggregatedResult[];
}
