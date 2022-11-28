import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSchedulesScheduleEByCandidateOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}

export enum GetSchedulesScheduleEByCandidateSupportOpposeEnum {
    S = "S",
    O = "O"
}


export class GetSchedulesScheduleEByCandidateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=committee_id" })
  committeeId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=district" })
  district?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: GetSchedulesScheduleEByCandidateOfficeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=support_oppose" })
  supportOppose?: GetSchedulesScheduleEByCandidateSupportOpposeEnum;
}


export class GetSchedulesScheduleEByCandidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesScheduleEByCandidateQueryParams;
}


export class GetSchedulesScheduleEByCandidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduleEByCandidatePage?: shared.ScheduleEByCandidatePage;

  @SpeakeasyMetadata()
  statusCode: number;
}
