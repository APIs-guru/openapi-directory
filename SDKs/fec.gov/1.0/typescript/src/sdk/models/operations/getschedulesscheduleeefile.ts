import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSchedulesScheduleEEfileCandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}

export enum GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}


export class GetSchedulesScheduleEEfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office" })
  candidateOffice?: GetSchedulesScheduleEEfileCandidateOfficeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" })
  candidateOfficeDistrict?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" })
  candidateOfficeState?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_party" })
  candidateParty?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_search" })
  candidateSearch?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filing_form" })
  filingForm?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_notice" })
  isNotice?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" })
  maxDisseminationDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_amount" })
  maxExpenditureAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_date" })
  maxExpenditureDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_filed_date" })
  maxFiledDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" })
  minDisseminationDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_amount" })
  minExpenditureAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_date" })
  minExpenditureDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_filed_date" })
  minFiledDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spender_name" })
  spenderName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[];
}


export class GetSchedulesScheduleEEfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleEEfileQueryParams;
}


export class GetSchedulesScheduleEEfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleEEfilePage?: shared.ScheduleEEfilePage;

  @SpeakeasyMetadata()
  statusCode: number;
}
