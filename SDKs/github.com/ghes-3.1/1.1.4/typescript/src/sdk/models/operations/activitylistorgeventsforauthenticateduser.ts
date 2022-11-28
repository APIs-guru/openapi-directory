import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListOrgEventsForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListOrgEventsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListOrgEventsForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListOrgEventsForAuthenticatedUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListOrgEventsForAuthenticatedUserQueryParams;
}


export class ActivityListOrgEventsForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Event })
  events?: shared.Event[];
}
