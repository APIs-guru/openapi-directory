import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomerServiceMetricTasksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_range" })
  dateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" })
  feedType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=look_back_days" })
  lookBackDays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetCustomerServiceMetricTasksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCustomerServiceMetricTasksQueryParams;

  @SpeakeasyMetadata()
  security: GetCustomerServiceMetricTasksSecurity;
}


export class GetCustomerServiceMetricTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerServiceMetricTaskCollection?: shared.CustomerServiceMetricTaskCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
