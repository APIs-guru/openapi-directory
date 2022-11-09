import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsCreateCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsCreateCardRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=note" })
  note: string;
}


export class ProjectsCreateCardRequestBody2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_id" })
  contentId: number;

  @Metadata({ data: "json, name=content_type" })
  contentType: string;
}


export class ProjectsCreateCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsCreateCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ProjectsCreateCard503ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsCreateCard503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors", elemType: operations.ProjectsCreateCard503ApplicationJsonErrors })
  errors?: ProjectsCreateCard503ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsCreateCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectCard?: shared.ProjectCard;

  @Metadata()
  projectsCreateCard422ApplicationJsonOneOf?: any;

  @Metadata()
  projectsCreateCard503ApplicationJsonObject?: ProjectsCreateCard503ApplicationJson;
}
