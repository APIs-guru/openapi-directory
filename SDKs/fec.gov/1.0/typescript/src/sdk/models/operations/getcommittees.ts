import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCommitteesCommitteeTypeEnum {
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

export enum GetCommitteesDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}

export enum GetCommitteesFilingFrequencyEnum {
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

export enum GetCommitteesOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}


export class GetCommitteesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: GetCommitteesCommitteeTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCommitteesDesignationEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetCommitteesFilingFrequencyEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_first_file_date" })
  maxFirstFileDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_last_f1_date" })
  maxLastF1Date?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_first_file_date" })
  minFirstFileDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_last_f1_date" })
  minLastF1Date?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetCommitteesOrganizationTypeEnum[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sponsor_candidate_id" })
  sponsorCandidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=treasurer_name" })
  treasurerName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number[];
}


export class GetCommitteesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommitteesQueryParams;
}


export class GetCommitteesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  committeePage?: shared.CommitteePage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
