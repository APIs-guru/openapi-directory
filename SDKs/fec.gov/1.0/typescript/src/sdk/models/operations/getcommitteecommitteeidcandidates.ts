import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdCandidatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}

export enum GetCommitteeCommitteeIdCandidatesCandidateStatusEnum {
    Unknown = ""
,    C = "C"
,    F = "F"
,    N = "N"
,    P = "P"
}

export enum GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum {
    Unknown = ""
,    I = "I"
,    C = "C"
,    O = "O"
}

export enum GetCommitteeCommitteeIdCandidatesOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}


export class GetCommitteeCommitteeIdCandidatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_status" })
  candidateStatus?: GetCommitteeCommitteeIdCandidatesCandidateStatusEnum[];

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
  incumbentChallenge?: GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetCommitteeCommitteeIdCandidatesOfficeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=party" })
  party?: string[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetCommitteeCommitteeIdCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdCandidatesPathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdCandidatesQueryParams;
}


export class GetCommitteeCommitteeIdCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  candidateDetailPage?: shared.CandidateDetailPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
