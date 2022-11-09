import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSchedulesScheduleEEfileCandidateOfficeEnum {
    Unknown = ""
,    H = "H"
,    S = "S"
,    P = "P"
}

export enum GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum {
    S = "S"
,    O = "O"
}


export class GetSchedulesScheduleEEfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office" })
  candidateOffice?: GetSchedulesScheduleEEfileCandidateOfficeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office_district" })
  candidateOfficeDistrict?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_office_state" })
  candidateOfficeState?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_party" })
  candidateParty?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_search" })
  candidateSearch?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=filing_form" })
  filingForm?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=image_number" })
  imageNumber?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_notice" })
  isNotice?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_dissemination_date" })
  maxDisseminationDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_amount" })
  maxExpenditureAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_expenditure_date" })
  maxExpenditureDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_filed_date" })
  maxFiledDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_dissemination_date" })
  minDisseminationDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_amount" })
  minExpenditureAmount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_expenditure_date" })
  minExpenditureDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_filed_date" })
  minFiledDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=most_recent" })
  mostRecent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=spender_name" })
  spenderName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=support_oppose_indicator" })
  supportOpposeIndicator?: GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[];
}


export class GetSchedulesScheduleEEfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleEEfileQueryParams;
}


export class GetSchedulesScheduleEEfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleEEfilePage?: shared.ScheduleEEfilePage;

  @Metadata()
  statusCode: number;
}
