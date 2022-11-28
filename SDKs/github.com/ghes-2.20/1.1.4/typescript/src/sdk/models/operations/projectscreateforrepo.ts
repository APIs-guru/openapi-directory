import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsCreateForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ProjectsCreateForRepoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsCreateForRepoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForRepoRequestBody;
}


export class ProjectsCreateForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  project?: shared.Project;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
