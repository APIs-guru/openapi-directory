import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsCreateCardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsCreateCardRequestBody1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=note" })
  note: string;
}


export class ProjectsCreateCardRequestBody2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_id" })
  contentId: number;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType: string;
}


export class ProjectsCreateCard503ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsCreateCard503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ProjectsCreateCard503ApplicationJsonErrors })
  errors?: ProjectsCreateCard503ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ProjectsCreateCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsCreateCardPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ProjectsCreateCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectCard?: shared.ProjectCard;

  @SpeakeasyMetadata()
  projectsCreateCard422ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  projectsCreateCard503ApplicationJsonObject?: ProjectsCreateCard503ApplicationJson;
}
