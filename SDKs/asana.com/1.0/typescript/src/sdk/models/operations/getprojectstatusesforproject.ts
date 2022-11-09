import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectStatusesForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class GetProjectStatusesForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectStatusesForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectStatusesForProjectPathParams;

  @Metadata()
  queryParams: GetProjectStatusesForProjectQueryParams;
}


export class GetProjectStatusesForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ProjectStatusCompact })
  data?: shared.ProjectStatusCompact[];
}


export class GetProjectStatusesForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProjectStatusesForProject200ApplicationJsonObject?: GetProjectStatusesForProject200ApplicationJson;
}
