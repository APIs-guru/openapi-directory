import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTasksQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schedule_id" })
  scheduleId?: string;
}


export class GetTasksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTasksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTasksQueryParams;

  @SpeakeasyMetadata()
  security: GetTasksSecurity;
}


export class GetTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskCollection?: shared.TaskCollection;
}
