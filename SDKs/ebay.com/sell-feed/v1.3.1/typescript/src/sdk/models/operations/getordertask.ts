import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrderTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetOrderTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrderTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrderTaskPathParams;

  @Metadata()
  security: GetOrderTaskSecurity;
}


export class GetOrderTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderTask?: shared.OrderTask;

  @Metadata()
  statusCode: number;
}
