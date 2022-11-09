import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerServiceMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_service_metric_type" })
  customerServiceMetricType: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=evaluation_type" })
  evaluationType: string;
}


export class GetCustomerServiceMetricQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=evaluation_marketplace_id" })
  evaluationMarketplaceId: string;
}


export class GetCustomerServiceMetricSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCustomerServiceMetricPathParams;

  @Metadata()
  queryParams: GetCustomerServiceMetricQueryParams;

  @Metadata()
  security: GetCustomerServiceMetricSecurity;
}


export class GetCustomerServiceMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCustomerServiceMetricResponse?: shared.GetCustomerServiceMetricResponse;

  @Metadata()
  statusCode: number;
}
