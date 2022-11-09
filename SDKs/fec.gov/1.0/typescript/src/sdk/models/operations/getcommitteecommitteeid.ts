import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommitteeCommitteeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=committee_id" })
  committeeId: string;
}

export enum GetCommitteeCommitteeIdCommitteeTypeEnum {
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

export enum GetCommitteeCommitteeIdDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}

export enum GetCommitteeCommitteeIdFilingFrequencyEnum {
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

export enum GetCommitteeCommitteeIdOrganizationTypeEnum {
    Unknown = ""
,    C = "C"
,    L = "L"
,    M = "M"
,    T = "T"
,    V = "V"
,    W = "W"
}


export class GetCommitteeCommitteeIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_type" })
  committeeType?: GetCommitteeCommitteeIdCommitteeTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=designation" })
  designation?: GetCommitteeCommitteeIdDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filing_frequency" })
  filingFrequency?: GetCommitteeCommitteeIdFilingFrequencyEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=organization_type" })
  organizationType?: GetCommitteeCommitteeIdOrganizationTypeEnum[];

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


export class GetCommitteeCommitteeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommitteeCommitteeIdPathParams;

  @Metadata()
  queryParams: GetCommitteeCommitteeIdQueryParams;
}


export class GetCommitteeCommitteeIdResponse extends SpeakeasyBase {
  @Metadata()
  committeeDetailPage?: shared.CommitteeDetailPage;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
