import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetOrderTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrderTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderTaskPathParams;

  @SpeakeasyMetadata()
  security: GetOrderTaskSecurity;
}


export class GetOrderTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orderTask?: shared.OrderTask;

  @SpeakeasyMetadata()
  statusCode: number;
}
