import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_task_id" })
  reportTaskId: string;
}


export class GetReportTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportTaskPathParams;

  @Metadata()
  security: GetReportTaskSecurity;
}


export class GetReportTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportTask?: shared.ReportTask;

  @Metadata()
  statusCode: number;
}
