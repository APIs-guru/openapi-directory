import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetJobsStateEnum {
    Unknown = ""
,    Active = "active"
,    Completed = "completed"
,    Failed = "failed"
,    Waiting = "waiting"
,    Delayed = "delayed"
}


export class GetJobsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=state" })
  state: GetJobsStateEnum;
}


export class GetJobsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jobType" })
  jobType?: shared.JobTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetJobsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetJobsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJobsPathParams;

  @Metadata()
  queryParams: GetJobsQueryParams;

  @Metadata()
  security: GetJobsSecurity;
}


export class GetJobs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetJobsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getJobs200ApplicationJsonObject?: GetJobs200ApplicationJson;
}
