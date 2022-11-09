import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForAuthenticatedUserRequestBody;
}


export class ProjectsCreateForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsCreateForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  projectsCreateForAuthenticatedUser415ApplicationJsonObject?: ProjectsCreateForAuthenticatedUser415ApplicationJson;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
