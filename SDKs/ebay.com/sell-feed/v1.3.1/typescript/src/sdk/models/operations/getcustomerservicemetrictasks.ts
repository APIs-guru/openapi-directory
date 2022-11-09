import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCustomerServiceMetricTasksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_range" })
  dateRange?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=feed_type" })
  feedType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=look_back_days" })
  lookBackDays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetCustomerServiceMetricTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCustomerServiceMetricTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCustomerServiceMetricTasksQueryParams;

  @Metadata()
  security: GetCustomerServiceMetricTasksSecurity;
}


export class GetCustomerServiceMetricTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerServiceMetricTaskCollection?: shared.CustomerServiceMetricTaskCollection;

  @Metadata()
  statusCode: number;
}
