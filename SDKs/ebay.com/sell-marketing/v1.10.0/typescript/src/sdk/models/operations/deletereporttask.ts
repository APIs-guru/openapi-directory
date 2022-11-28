import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteReportTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_task_id" })
  reportTaskId: string;
}


export class DeleteReportTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteReportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteReportTaskPathParams;

  @SpeakeasyMetadata()
  security: DeleteReportTaskSecurity;
}


export class DeleteReportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
