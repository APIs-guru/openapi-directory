import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListReposStarredByAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class ActivityListReposStarredByAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}


export class ActivityListReposStarredByAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @Metadata({ elemType: shared.StarredRepository })
  starredRepositories?: shared.StarredRepository[];
}
