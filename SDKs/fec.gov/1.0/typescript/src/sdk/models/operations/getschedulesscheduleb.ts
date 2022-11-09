import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSchedulesScheduleBSpenderCommitteeDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}

export enum GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum {
    Unknown = ""
,    C = "C"
,    L = "L"
,    M = "M"
,    T = "T"
,    V = "V"
,    W = "W"
}

export enum GetSchedulesScheduleBSpenderCommitteeTypeEnum {
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


export class GetSchedulesScheduleBQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=disbursement_description" })
  disbursementDescription?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=disbursement_purpose_category" })
  disbursementPurposeCategory?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_amount" })
  lastDisbursementAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_date" })
  lastDisbursementDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_city" })
  recipientCity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_id" })
  recipientCommitteeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_name" })
  recipientName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_state" })
  recipientState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spender_committee_designation" })
  spenderCommitteeDesignation?: GetSchedulesScheduleBSpenderCommitteeDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=spender_committee_org_type" })
  spenderCommitteeOrgType?: GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=spender_committee_type" })
  spenderCommitteeType?: GetSchedulesScheduleBSpenderCommitteeTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number[];
}


export class GetSchedulesScheduleBRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleBQueryParams;
}


export class GetSchedulesScheduleBResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleBPage?: shared.ScheduleBPage;

  @Metadata()
  statusCode: number;
}
