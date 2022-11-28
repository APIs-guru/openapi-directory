import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListPublicEventsForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListPublicEventsForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListPublicEventsForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListPublicEventsForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListPublicEventsForUserQueryParams;
}


export class ActivityListPublicEventsForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];
}
