import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_status_gid" })
  projectStatusGid: string;
}


export class GetProjectStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectStatusPathParams;

  @Metadata()
  queryParams: GetProjectStatusQueryParams;
}


export class GetProjectStatus200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectStatusResponse;
}


export class GetProjectStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProjectStatus200ApplicationJsonObject?: GetProjectStatus200ApplicationJson;
}
