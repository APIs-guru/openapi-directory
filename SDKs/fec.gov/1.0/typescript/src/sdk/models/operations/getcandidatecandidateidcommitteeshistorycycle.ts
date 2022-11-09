import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCandidateCandidateIdCommitteesHistoryCyclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}

export enum GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}


export class GetCandidateCandidateIdCommitteesHistoryCycleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[];

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


export class GetCandidateCandidateIdCommitteesHistoryCycleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCandidateCandidateIdCommitteesHistoryCyclePathParams;

  @Metadata()
  queryParams: GetCandidateCandidateIdCommitteesHistoryCycleQueryParams;
}


export class GetCandidateCandidateIdCommitteesHistoryCycleResponse extends SpeakeasyBase {
  @Metadata()
  committeeHistoryPage?: shared.CommitteeHistoryPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
