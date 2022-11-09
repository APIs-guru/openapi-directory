import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListReposStarredByUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ActivityListReposStarredByUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class ActivityListReposStarredByUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListReposStarredByUserPathParams;

  @Metadata()
  queryParams: ActivityListReposStarredByUserQueryParams;
}


export class ActivityListReposStarredByUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @Metadata({ elemType: shared.StarredRepository })
  starredRepositories?: shared.StarredRepository[];
}
