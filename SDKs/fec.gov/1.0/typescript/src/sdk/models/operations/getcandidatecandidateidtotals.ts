import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCandidateCandidateIdTotalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;
}


export class GetCandidateCandidateIdTotalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

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


export class GetCandidateCandidateIdTotalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCandidateCandidateIdTotalsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCandidateCandidateIdTotalsQueryParams;
}


export class GetCandidateCandidateIdTotalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeTotalsPage?: shared.CommitteeTotalsPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
