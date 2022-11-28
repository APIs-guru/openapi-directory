import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomerServiceMetricPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_service_metric_type" })
  customerServiceMetricType: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=evaluation_type" })
  evaluationType: string;
}


export class GetCustomerServiceMetricQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evaluation_marketplace_id" })
  evaluationMarketplaceId: string;
}


export class GetCustomerServiceMetricSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomerServiceMetricPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomerServiceMetricQueryParams;

  @SpeakeasyMetadata()
  security: GetCustomerServiceMetricSecurity;
}


export class GetCustomerServiceMetricResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCustomerServiceMetricResponse?: shared.GetCustomerServiceMetricResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
