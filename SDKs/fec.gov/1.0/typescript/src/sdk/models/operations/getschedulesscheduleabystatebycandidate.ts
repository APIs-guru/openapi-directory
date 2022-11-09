import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesScheduleAByStateByCandidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=candidate_id" })
  candidateId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=cycle" })
  cycle: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=election_full" })
  electionFull?: boolean;

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
}


export class GetSchedulesScheduleAByStateByCandidateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchedulesScheduleAByStateByCandidateQueryParams;
}


export class GetSchedulesScheduleAByStateByCandidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  scheduleAByStateCandidatePage?: shared.ScheduleAByStateCandidatePage;

  @Metadata()
  statusCode: number;
}
