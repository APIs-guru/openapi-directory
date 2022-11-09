import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommitteesCommitteeTypeEnum {
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

export enum GetCommitteesDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}

export enum GetCommitteesFilingFrequencyEnum {
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

export enum GetCommitteesOrganizationTypeEnum {
    Unknown = ""
,    C = "C"
,    L = "L"
,    M = "M"
,    T = "T"
,    V = "V"
,    W = "W"
}


export class GetCommitteesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: GetCommitteesCommitteeTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCommitteesDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetCommitteesFilingFrequencyEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" })
  maxFirstFileDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_last_f1_date" })
  maxLastF1Date?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" })
  minFirstFileDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_last_f1_date" })
  minLastF1Date?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetCommitteesOrganizationTypeEnum[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sponsor_candidate_id" })
  sponsorCandidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=treasurer_name" })
  treasurerName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number[];
}


export class GetCommitteesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommitteesQueryParams;
}


export class GetCommitteesResponse extends SpeakeasyBase {
  @Metadata()
  committeePage?: shared.CommitteePage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
