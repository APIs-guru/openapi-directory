import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsCreateColumnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class ProjectsCreateColumnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateColumnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsCreateColumnPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateColumnRequestBody;
}


export class ProjectsCreateColumnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectColumn?: shared.ProjectColumn;

  @Metadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
