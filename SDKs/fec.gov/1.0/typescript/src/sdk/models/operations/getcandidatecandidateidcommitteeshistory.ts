import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCandidateCandidateIdCommitteesHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;
}

export enum GetCandidateCandidateIdCommitteesHistoryDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}


export class GetCandidateCandidateIdCommitteesHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCandidateCandidateIdCommitteesHistoryDesignationEnum[];

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


export class GetCandidateCandidateIdCommitteesHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCandidateCandidateIdCommitteesHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCandidateCandidateIdCommitteesHistoryQueryParams;
}


export class GetCandidateCandidateIdCommitteesHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeHistoryPage?: shared.CommitteeHistoryPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
