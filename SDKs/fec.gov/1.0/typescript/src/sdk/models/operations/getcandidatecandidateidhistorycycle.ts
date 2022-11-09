import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCandidateCandidateIdHistoryCyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}


export class GetCandidateCandidateIdHistoryCycleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;
}


export class GetCandidateCandidateIdHistoryCycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCandidateCandidateIdHistoryCyclePathParams;

  @Metadata()
  queryParams: GetCandidateCandidateIdHistoryCycleQueryParams;
}


export class GetCandidateCandidateIdHistoryCycleResponse extends SpeakeasyBase {
  @Metadata()
  candidateHistoryPage?: shared.CandidateHistoryPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
