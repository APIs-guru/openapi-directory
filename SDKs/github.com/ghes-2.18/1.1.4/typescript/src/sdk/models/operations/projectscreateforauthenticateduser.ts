import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ProjectsCreateForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForAuthenticatedUserRequestBody;
}


export class ProjectsCreateForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  projectsCreateForAuthenticatedUser415ApplicationJsonObject?: ProjectsCreateForAuthenticatedUser415ApplicationJson;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
