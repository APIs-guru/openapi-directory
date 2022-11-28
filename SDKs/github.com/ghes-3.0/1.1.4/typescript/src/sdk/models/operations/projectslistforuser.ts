import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsListForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ProjectsListForUserStateEnum {
    Open = "open",
    Closed = "closed",
    All = "all"
}


export class ProjectsListForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: ProjectsListForUserStateEnum;
}


export class ProjectsListForUser415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsListForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsListForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ProjectsListForUserQueryParams;
}


export class ProjectsListForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @SpeakeasyMetadata()
  projectsListForUser415ApplicationJsonObject?: ProjectsListForUser415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
