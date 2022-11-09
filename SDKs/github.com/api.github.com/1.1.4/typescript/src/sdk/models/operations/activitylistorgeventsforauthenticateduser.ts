import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListOrgEventsForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListOrgEventsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListOrgEventsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListOrgEventsForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: ActivityListOrgEventsForAuthenticatedUserQueryParams;
}


export class ActivityListOrgEventsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];
}
