import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProjectsUpdateColumnPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_id" })
  columnId: number;
}


export class ProjectsUpdateColumnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ProjectsUpdateColumnRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProjectsUpdateColumnPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ProjectsUpdateColumnRequestBody;
}


export class ProjectsUpdateColumnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  projectColumn?: shared.ProjectColumn;
}
