import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSchedulesScheduleBSpenderCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}

export enum GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}

export enum GetSchedulesScheduleBSpenderCommitteeTypeEnum {
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


export class GetSchedulesScheduleBQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursement_description" })
  disbursementDescription?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disbursement_purpose_category" })
  disbursementPurposeCategory?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_amount" })
  lastDisbursementAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_disbursement_date" })
  lastDisbursementDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_city" })
  recipientCity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_id" })
  recipientCommitteeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_name" })
  recipientName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_state" })
  recipientState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_designation" })
  spenderCommitteeDesignation?: GetSchedulesScheduleBSpenderCommitteeDesignationEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_org_type" })
  spenderCommitteeOrgType?: GetSchedulesScheduleBSpenderCommitteeOrgTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_committee_type" })
  spenderCommitteeType?: GetSchedulesScheduleBSpenderCommitteeTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number[];
}


export class GetSchedulesScheduleBRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleBQueryParams;
}


export class GetSchedulesScheduleBResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleBPage?: shared.ScheduleBPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
