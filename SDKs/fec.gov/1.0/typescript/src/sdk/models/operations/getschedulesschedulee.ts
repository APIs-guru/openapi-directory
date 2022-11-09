import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSchedulesScheduleECandidateOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}

export enum GetSchedulesScheduleESupportOpposeIndicatorEnum {
    S = "S"
,    O = "O"
}


export class GetSchedulesScheduleEQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office" })
  candidateOffice?: GetSchedulesScheduleECandidateOfficeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" })
  candidateOfficeDistrict?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" })
  candidateOfficeState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_party" })
  candidateParty?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filing_form" })
  filingForm?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_notice" })
  isNotice?: boolean[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_amount" })
  lastExpenditureAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_date" })
  lastExpenditureDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_office_total_ytd" })
  lastOfficeTotalYtd?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_support_oppose_indicator" })
  lastSupportOpposeIndicator?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" })
  maxDisseminationDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_filing_date" })
  maxFilingDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" })
  minDisseminationDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_filing_date" })
  minFilingDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payee_name" })
  payeeName?: string[];

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetSchedulesScheduleESupportOpposeIndicatorEnum[];
}


export class GetSchedulesScheduleERequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleEQueryParams;
}


export class GetSchedulesScheduleEResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleEPage?: shared.ScheduleEPage;

  @Metadata()
  statusCode: number;
}
