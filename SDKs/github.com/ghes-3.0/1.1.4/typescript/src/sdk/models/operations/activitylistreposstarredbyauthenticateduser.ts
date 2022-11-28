import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivityListReposStarredByAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.SortEnum;
}


export class ActivityListReposStarredByAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}


export class ActivityListReposStarredByAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @SpeakeasyMetadata({ elemType: shared.StarredRepository })
  starredRepositories?: shared.StarredRepository[];
}
