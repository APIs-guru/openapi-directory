import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListReposWatchedByUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListReposWatchedByUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListReposWatchedByUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListReposWatchedByUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListReposWatchedByUserQueryParams;
}


export class ActivityListReposWatchedByUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];
}
