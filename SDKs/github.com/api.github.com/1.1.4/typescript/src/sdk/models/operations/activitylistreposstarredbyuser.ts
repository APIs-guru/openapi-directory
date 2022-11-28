import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListReposStarredByUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListReposStarredByUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class ActivityListReposStarredByUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityListReposStarredByUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivityListReposStarredByUserQueryParams;
}


export class ActivityListReposStarredByUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @SpeakeasyMetadata({ elemType: shared.StarredRepository })
  starredRepositories?: shared.StarredRepository[];
}
