import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsListForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ProjectsListForRepoStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class ProjectsListForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForRepoStateEnum;
}


export class ProjectsListForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsListForRepoPathParams;

  @Metadata()
  queryParams: ProjectsListForRepoQueryParams;
}


export class ProjectsListForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
