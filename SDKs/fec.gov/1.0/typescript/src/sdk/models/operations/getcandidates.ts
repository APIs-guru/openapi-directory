import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCandidatesCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}

export enum GetCandidatesIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}

export enum GetCandidatesOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}


export class GetCandidatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_status" })
  candidateStatus?: GetCandidatesCandidateStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=incumbent_challenge" })
  incumbentChallenge?: GetCandidatesIncumbentChallengeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" })
  maxFirstFileDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" })
  minFirstFileDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesOfficeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCandidatesQueryParams;
}


export class GetCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  candidatePage?: shared.CandidatePage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
