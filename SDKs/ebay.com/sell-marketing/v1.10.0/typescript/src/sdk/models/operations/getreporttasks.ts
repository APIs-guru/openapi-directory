import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_task_statuses" })
  reportTaskStatuses?: string;
}


export class GetReportTasksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportTasksQueryParams;

  @SpeakeasyMetadata()
  security: GetReportTasksSecurity;
}


export class GetReportTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportTaskPagedCollection?: shared.ReportTaskPagedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
