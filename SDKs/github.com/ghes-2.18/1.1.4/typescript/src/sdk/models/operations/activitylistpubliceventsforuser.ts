import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListPublicEventsForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListPublicEventsForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListPublicEventsForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListPublicEventsForUserPathParams;

  @Metadata()
  queryParams: ActivityListPublicEventsForUserQueryParams;
}


export class ActivityListPublicEventsForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];
}
