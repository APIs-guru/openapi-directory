import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsListForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ProjectsListForUserStateEnum {
    Open = "open"
,    Closed = "closed"
,    All = "all"
}


export class ProjectsListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForUserStateEnum;
}


export class ProjectsListForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsListForUserPathParams;

  @Metadata()
  queryParams: ProjectsListForUserQueryParams;
}


export class ProjectsListForUser415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @Metadata()
  projectsListForUser415ApplicationJsonObject?: ProjectsListForUser415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
