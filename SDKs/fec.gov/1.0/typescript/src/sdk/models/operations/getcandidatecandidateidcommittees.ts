import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCandidateCandidateIdCommitteesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=candidate_id" })
  candidateId: string;
}

export enum GetCandidateCandidateIdCommitteesCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}

export enum GetCandidateCandidateIdCommitteesDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}

export enum GetCandidateCandidateIdCommitteesFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}

export enum GetCandidateCandidateIdCommitteesOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}


export class GetCandidateCandidateIdCommitteesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: GetCandidateCandidateIdCommitteesCommitteeTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCandidateCandidateIdCommitteesDesignationEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetCandidateCandidateIdCommitteesFilingFrequencyEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetCandidateCandidateIdCommitteesOrganizationTypeEnum[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number[];
}


export class GetCandidateCandidateIdCommitteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCandidateCandidateIdCommitteesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCandidateCandidateIdCommitteesQueryParams;
}


export class GetCandidateCandidateIdCommitteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeeDetailPage?: shared.CommitteeDetailPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
