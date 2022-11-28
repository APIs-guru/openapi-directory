import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetJobsStateEnum {
    Unknown = "",
    Active = "active",
    Completed = "completed",
    Failed = "failed",
    Waiting = "waiting",
    Delayed = "delayed"
}


export class GetJobsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=state" })
  state: GetJobsStateEnum;
}


export class GetJobsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jobType" })
  jobType?: shared.JobTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetJobsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetJobs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetJobsQueryParams;

  @SpeakeasyMetadata()
  security: GetJobsSecurity;
}


export class GetJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getJobs200ApplicationJsonObject?: GetJobs200ApplicationJson;
}
