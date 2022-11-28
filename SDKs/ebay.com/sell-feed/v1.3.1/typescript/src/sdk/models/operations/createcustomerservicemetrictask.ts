import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCustomerServiceMetricTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept-language" })
  acceptLanguage: string;
}


export class CreateCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateCustomerServiceMetricTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCustomerServiceMetricTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateServiceMetricsTaskRequest;

  @SpeakeasyMetadata()
  security: CreateCustomerServiceMetricTaskSecurity;
}


export class CreateCustomerServiceMetricTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
