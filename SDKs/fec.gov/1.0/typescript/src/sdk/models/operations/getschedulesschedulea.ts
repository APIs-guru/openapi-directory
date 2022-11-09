import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSchedulesScheduleAContributorTypeEnum {
    Individual = "individual"
,    Committee = "committee"
}

export enum GetSchedulesScheduleARecipientCommitteeDesignationEnum {
    Unknown = ""
,    A = "A"
,    J = "J"
,    P = "P"
,    U = "U"
,    B = "B"
,    D = "D"
}

export enum GetSchedulesScheduleARecipientCommitteeOrgTypeEnum {
    Unknown = ""
,    C = "C"
,    L = "L"
,    M = "M"
,    T = "T"
,    V = "V"
,    W = "W"
}

export enum GetSchedulesScheduleARecipientCommitteeTypeEnum {
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


export class GetSchedulesScheduleAQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_city" })
  contributorCity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_employer" })
  contributorEmployer?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_id" })
  contributorId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_name" })
  contributorName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_occupation" })
  contributorOccupation?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_state" })
  contributorState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_type" })
  contributorType?: GetSchedulesScheduleAContributorTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor_zip" })
  contributorZip?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_individual" })
  isIndividual?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_amount" })
  lastContributionReceiptAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_contribution_receipt_date" })
  lastContributionReceiptDate?: Date;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_load_date" })
  maxLoadDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_load_date" })
  minLoadDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_designation" })
  recipientCommitteeDesignation?: GetSchedulesScheduleARecipientCommitteeDesignationEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_org_type" })
  recipientCommitteeOrgType?: GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=recipient_committee_type" })
  recipientCommitteeType?: GetSchedulesScheduleARecipientCommitteeTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_hide_null" })
  sortHideNull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_null_only" })
  sortNullOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" })
  twoYearTransactionPeriod?: number[];
}


export class GetSchedulesScheduleARequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleAQueryParams;
}


export class GetSchedulesScheduleAResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleAPage?: shared.ScheduleAPage;

  @Metadata()
  statusCode: number;
}
