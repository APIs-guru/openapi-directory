import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=report_task_statuses" })
  reportTaskStatuses?: string;
}


export class GetReportTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportTasksQueryParams;

  @Metadata()
  security: GetReportTasksSecurity;
}


export class GetReportTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportTaskPagedCollection?: shared.ReportTaskPagedCollection;

  @Metadata()
  statusCode: number;
}
