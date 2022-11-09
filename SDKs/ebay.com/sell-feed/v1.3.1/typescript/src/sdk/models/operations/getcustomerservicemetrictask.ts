import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerServiceMetricTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomerServiceMetricTaskPathParams;

  @Metadata()
  security: GetCustomerServiceMetricTaskSecurity;
}


export class GetCustomerServiceMetricTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceMetricsTask?: shared.ServiceMetricsTask;

  @Metadata()
  statusCode: number;
}
