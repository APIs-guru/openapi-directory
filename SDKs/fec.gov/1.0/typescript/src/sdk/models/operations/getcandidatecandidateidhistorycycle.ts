import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCandidateCandidateIdHistoryCyclePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}


export class GetCandidateCandidateIdHistoryCycleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

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
}


export class GetCandidateCandidateIdHistoryCycleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCandidateCandidateIdHistoryCyclePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCandidateCandidateIdHistoryCycleQueryParams;
}


export class GetCandidateCandidateIdHistoryCycleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  candidateHistoryPage?: shared.CandidateHistoryPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
