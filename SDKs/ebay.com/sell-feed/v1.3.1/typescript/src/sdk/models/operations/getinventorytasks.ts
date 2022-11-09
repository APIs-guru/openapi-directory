import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInventoryTasksQueryParams extends SpeakeasyBase {
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


export class GetInventoryTasksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetInventoryTasksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInventoryTasksQueryParams;

  @Metadata()
  security: GetInventoryTasksSecurity;
}


export class GetInventoryTasksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryTaskCollection?: shared.InventoryTaskCollection;

  @Metadata()
  statusCode: number;
}
