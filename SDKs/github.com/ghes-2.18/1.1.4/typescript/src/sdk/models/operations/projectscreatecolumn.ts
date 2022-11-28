import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsCreateColumnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class ProjectsCreateColumnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsCreateColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsCreateColumnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ProjectsCreateColumnRequestBody;
}


export class ProjectsCreateColumnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectColumn?: shared.ProjectColumn;

  @SpeakeasyMetadata()
  validationErrorSimple?: shared.ValidationErrorSimple;
}
