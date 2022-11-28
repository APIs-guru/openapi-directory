import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProjectsGetColumnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsGetColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProjectsGetColumnPathParams;
}


export class ProjectsGetColumnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  projectColumn?: shared.ProjectColumn;
}
