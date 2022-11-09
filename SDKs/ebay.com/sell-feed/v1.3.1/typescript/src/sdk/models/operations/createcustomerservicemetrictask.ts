import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomerServiceMetricTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept-language" })
  acceptLanguage: string;
}


export class CreateCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateCustomerServiceMetricTaskRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomerServiceMetricTaskHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateServiceMetricsTaskRequest;

  @Metadata()
  security: CreateCustomerServiceMetricTaskSecurity;
}


export class CreateCustomerServiceMetricTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
