import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListReceivedPublicEventsForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListReceivedPublicEventsForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListReceivedPublicEventsForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListReceivedPublicEventsForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListReceivedPublicEventsForUserQueryParams;
}


export class ActivityListReceivedPublicEventsForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];
}
