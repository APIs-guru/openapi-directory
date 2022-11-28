import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchedulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=feed_type" })
  feedType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetSchedulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchedulesQueryParams;

  @SpeakeasyMetadata()
  security: GetSchedulesSecurity;
}


export class GetSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userScheduleCollection?: shared.UserScheduleCollection;
}
