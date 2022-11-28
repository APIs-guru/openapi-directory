import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_task_id" })
  reportTaskId: string;
}


export class GetReportTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportTaskPathParams;

  @SpeakeasyMetadata()
  security: GetReportTaskSecurity;
}


export class GetReportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportTask?: shared.ReportTask;

  @SpeakeasyMetadata()
  statusCode: number;
}
