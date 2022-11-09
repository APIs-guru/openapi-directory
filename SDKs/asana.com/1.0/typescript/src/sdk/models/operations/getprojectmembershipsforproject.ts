import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectMembershipsForProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
  projectGid: string;
}


export class GetProjectMembershipsForProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetProjectMembershipsForProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectMembershipsForProjectPathParams;

  @Metadata()
  queryParams: GetProjectMembershipsForProjectQueryParams;
}


export class GetProjectMembershipsForProject200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ProjectMembershipCompact })
  data?: shared.ProjectMembershipCompact[];
}


export class GetProjectMembershipsForProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProjectMembershipsForProject200ApplicationJsonObject?: GetProjectMembershipsForProject200ApplicationJson;
}
