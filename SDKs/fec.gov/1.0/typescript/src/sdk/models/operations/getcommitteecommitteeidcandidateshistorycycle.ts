import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}


export class GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams extends SpeakeasyBase {
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


export class GetCommitteeCommitteeIdCandidatesHistoryCycleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommitteeCommitteeIdCandidatesHistoryCyclePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCommitteeCommitteeIdCandidatesHistoryCycleQueryParams;
}


export class GetCommitteeCommitteeIdCandidatesHistoryCycleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  candidateHistoryPage?: shared.CandidateHistoryPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
