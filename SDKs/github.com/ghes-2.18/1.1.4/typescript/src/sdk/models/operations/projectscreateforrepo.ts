import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsCreateForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ProjectsCreateForRepoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsCreateForRepoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForRepoRequestBody;
}


export class ProjectsCreateForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  project?: shared.Project;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
