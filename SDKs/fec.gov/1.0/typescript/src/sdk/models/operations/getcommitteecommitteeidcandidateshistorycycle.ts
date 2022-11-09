import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}


export class GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams extends SpeakeasyBase {
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


export class GetCommitteeCommitteeIdCandidatesHistoryCycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams;
}


export class GetCommitteeCommitteeIdCandidatesHistoryCycleResponse extends SpeakeasyBase {
  @Metadata()
  candidateHistoryPage?: shared.CandidateHistoryPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
