import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomerServiceMetricTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerServiceMetricTaskPathParams;

  @SpeakeasyMetadata()
  security: GetCustomerServiceMetricTaskSecurity;
}


export class GetCustomerServiceMetricTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceMetricsTask?: shared.ServiceMetricsTask;

  @SpeakeasyMetadata()
  statusCode: number;
}
