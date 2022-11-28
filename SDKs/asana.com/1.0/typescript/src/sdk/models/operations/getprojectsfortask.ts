import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsForTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
  taskGid: string;
}


export class GetProjectsForTaskQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectsForTask200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ProjectCompact })
  data?: shared.ProjectCompact[];
}


export class GetProjectsForTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectsForTaskPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectsForTaskQueryParams;
}


export class GetProjectsForTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectsForTask200ApplicationJsonObject?: GetProjectsForTask200ApplicationJson;
}
