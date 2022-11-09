import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListRepoNotificationsForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityListRepoNotificationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=participating" })
  participating?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class ActivityListRepoNotificationsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListRepoNotificationsForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
}


export class ActivityListRepoNotificationsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Thread })
  threads?: shared.Thread[];
}
