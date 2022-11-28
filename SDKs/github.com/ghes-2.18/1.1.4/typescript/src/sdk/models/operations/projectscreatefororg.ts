import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsCreateForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ProjectsCreateForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsCreateForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForOrgRequestBody;
}


export class ProjectsCreateForOrgResponse extends SpeakeasyBase {
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
