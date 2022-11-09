import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsCreateForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ProjectsCreateForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsCreateForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateForOrgRequestBody;
}


export class ProjectsCreateForOrgResponse extends SpeakeasyBase {
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
