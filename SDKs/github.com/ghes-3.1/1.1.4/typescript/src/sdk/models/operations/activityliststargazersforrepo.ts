import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListStargazersForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityListStargazersForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListStargazersForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListStargazersForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListStargazersForRepoQueryParams;
}


export class ActivityListStargazersForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  activityListStargazersForRepo200ApplicationJsonAnyOf?: any;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
