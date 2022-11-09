import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteReportTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_task_id" })
  reportTaskId: string;
}


export class DeleteReportTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteReportTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteReportTaskPathParams;

  @Metadata()
  security: DeleteReportTaskSecurity;
}


export class DeleteReportTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
