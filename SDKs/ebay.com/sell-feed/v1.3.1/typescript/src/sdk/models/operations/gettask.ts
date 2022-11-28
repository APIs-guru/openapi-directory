import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskPathParams;

  @SpeakeasyMetadata()
  security: GetTaskSecurity;
}


export class GetTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  task?: shared.Task;
}
