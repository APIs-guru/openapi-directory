import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}


export class GetCommunicationCostsAggregatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetCommunicationCostsAggregatesSupportOpposeIndicatorEnum;
}


export class GetCommunicationCostsAggregatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommunicationCostsAggregatesQueryParams;
}


export class GetCommunicationCostsAggregatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
