import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrderTasksQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=schedule_id" })
  scheduleId?: string;
}


export class GetOrderTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrderTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrderTasksQueryParams;

  @Metadata()
  security: GetOrderTasksSecurity;
}


export class GetOrderTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderTaskCollection?: shared.OrderTaskCollection;

  @Metadata()
  statusCode: number;
}
