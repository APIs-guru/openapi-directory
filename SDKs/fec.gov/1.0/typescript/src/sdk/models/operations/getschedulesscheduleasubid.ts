import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesScheduleASubIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sub_id" })
  subId: string;
}

export enum GetSchedulesScheduleASubIdContributorTypeEnum {
    Individual = "individual",
    Committee = "committee"
}

export enum GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}

export enum GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}

export enum GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum {
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


export class GetSchedulesScheduleASubIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_city" })
  contributorCity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" })
  contributorEmployer?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_id" })
  contributorId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_name" })
  contributorName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" })
  contributorOccupation?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_state" })
  contributorState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_type" })
  contributorType?: GetSchedulesScheduleASubIdContributorTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor_zip" })
  contributorZip?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_individual" })
  isIndividual?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_amount" })
  lastContributionReceiptAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_date" })
  lastContributionReceiptDate?: Date;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_load_date" })
  maxLoadDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_load_date" })
  minLoadDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_designation" })
  recipientCommitteeDesignation?: GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_org_type" })
  recipientCommitteeOrgType?: GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_type" })
  recipientCommitteeType?: GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number[];
}


export class GetSchedulesScheduleASubIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchedulesScheduleASubIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleASubIdQueryParams;
}


export class GetSchedulesScheduleASubIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleAPage?: shared.ScheduleAPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
