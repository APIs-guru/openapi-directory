import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsListForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ProjectsListForRepoStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class ProjectsListForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForRepoStateEnum;
}


export class ProjectsListForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsListForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: ProjectsListForRepoQueryParams;
}


export class ProjectsListForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
