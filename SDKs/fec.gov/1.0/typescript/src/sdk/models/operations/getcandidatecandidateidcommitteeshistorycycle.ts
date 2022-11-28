import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCandidateCandidateIdCommitteesHistoryCyclePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cycle" })
  cycle: number;
}

export enum GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}


export class GetCandidateCandidateIdCommitteesHistoryCycleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCandidateCandidateIdCommitteesHistoryCycleDesignationEnum[];

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


export class GetCandidateCandidateIdCommitteesHistoryCycleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCandidateCandidateIdCommitteesHistoryCyclePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCandidateCandidateIdCommitteesHistoryCycleQueryParams;
}


export class GetCandidateCandidateIdCommitteesHistoryCycleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeHistoryPage?: shared.CommitteeHistoryPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
