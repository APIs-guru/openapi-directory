import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSchedulesScheduleECandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}

export enum GetSchedulesScheduleESupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}


export class GetSchedulesScheduleEQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office" })
  candidateOffice?: GetSchedulesScheduleECandidateOfficeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" })
  candidateOfficeDistrict?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" })
  candidateOfficeState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_party" })
  candidateParty?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_form" })
  filingForm?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_notice" })
  isNotice?: boolean[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_amount" })
  lastExpenditureAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_expenditure_date" })
  lastExpenditureDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_index" })
  lastIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_office_total_ytd" })
  lastOfficeTotalYtd?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_support_oppose_indicator" })
  lastSupportOpposeIndicator?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_number" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_amount" })
  maxAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_date" })
  maxDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" })
  maxDisseminationDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_filing_date" })
  maxFilingDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_image_number" })
  maxImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_amount" })
  minAmount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_date" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" })
  minDisseminationDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_filing_date" })
  minFilingDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_image_number" })
  minImageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payee_name" })
  payeeName?: string[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetSchedulesScheduleESupportOpposeIndicatorEnum[];
}


export class GetSchedulesScheduleERequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleEQueryParams;
}


export class GetSchedulesScheduleEResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleEPage?: shared.ScheduleEPage;

  @SpeakeasyMetadata()
  statusCode: number;
}
