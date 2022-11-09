import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListStargazersForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityListStargazersForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListStargazersForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListStargazersForRepoPathParams;

  @Metadata()
  queryParams: ActivityListStargazersForRepoQueryParams;
}


export class ActivityListStargazersForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  activityListStargazersForRepo200ApplicationJsonAnyOf?: any;

  @Metadata()
  validationError?: shared.ValidationError;
}
