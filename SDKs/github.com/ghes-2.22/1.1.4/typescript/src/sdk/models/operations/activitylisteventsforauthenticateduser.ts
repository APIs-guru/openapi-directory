import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListEventsForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListEventsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListEventsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListEventsForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: ActivityListEventsForAuthenticatedUserQueryParams;
}


export class ActivityListEventsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];
}
