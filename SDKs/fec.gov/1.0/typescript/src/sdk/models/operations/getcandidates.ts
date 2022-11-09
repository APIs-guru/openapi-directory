import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCandidatesCandidateStatusEnum {
    Unknown = ""
,    C = "C"
,    F = "F"
,    N = "N"
,    P = "P"
}

export enum GetCandidatesIncumbentChallengeEnum {
    Unknown = ""
,    I = "I"
,    C = "C"
,    O = "O"
}

export enum GetCandidatesOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}


export class GetCandidatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_status" })
  candidateStatus?: GetCandidatesCandidateStatusEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_year" })
  electionYear?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" })
  federalFundsFlag?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_raised_funds" })
  hasRaisedFunds?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=incumbent_challenge" })
  incumbentChallenge?: GetCandidatesIncumbentChallengeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_active_candidate" })
  isActiveCandidate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" })
  maxFirstFileDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" })
  minFirstFileDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCandidatesOfficeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" })
  sortNullsLast?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCandidatesQueryParams;
}


export class GetCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  candidatePage?: shared.CandidatePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
