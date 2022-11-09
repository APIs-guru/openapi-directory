import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCandidateCandidateIdCommitteesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;
}

export enum GetCandidateCandidateIdCommitteesCommitteeTypeEnum {
    Unknown = ""
,    C = "C"
,    D = "D"
,    E = "E"
,    H = "H"
,    I = "I"
,    N = "N"
,    O = "O"
,    P = "P"
,    Q = "Q"
,    S = "S"
,    U = "U"
,    V = "V"
,    W = "W"
,    X = "X"
,    Y = "Y"
,    Z = "Z"
}

export enum GetCandidateCandidateIdCommitteesDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}

export enum GetCandidateCandidateIdCommitteesFilingFrequencyEnum {
    Unknown = ""
,    A = "A"
,    M = "M"
,    N = "N"
,    Q = "Q"
,    T = "T"
,    W = "W"
,    MinusA = "-A"
,    MinusT = "-T"
}

export enum GetCandidateCandidateIdCommitteesOrganizationTypeEnum {
    Unknown = ""
,    C = "C"
,    L = "L"
,    M = "M"
,    T = "T"
,    V = "V"
,    W = "W"
}


export class GetCandidateCandidateIdCommitteesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: GetCandidateCandidateIdCommitteesCommitteeTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCandidateCandidateIdCommitteesDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetCandidateCandidateIdCommitteesFilingFrequencyEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetCandidateCandidateIdCommitteesOrganizationTypeEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number[];
}


export class GetCandidateCandidateIdCommitteesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCandidateCandidateIdCommitteesPathParams;

  @Metadata()
  queryParams: GetCandidateCandidateIdCommitteesQueryParams;
}


export class GetCandidateCandidateIdCommitteesResponse extends SpeakeasyBase {
  @Metadata()
  committeeDetailPage?: shared.CommitteeDetailPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
