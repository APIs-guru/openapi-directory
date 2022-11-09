import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_membership_gid" })
  projectMembershipGid: string;
}


export class GetProjectMembershipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectMembershipPathParams;

  @Metadata()
  queryParams: GetProjectMembershipQueryParams;
}


export class GetProjectMembership200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.ProjectMembershipResponse;
}


export class GetProjectMembershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getProjectMembership200ApplicationJsonObject?: GetProjectMembership200ApplicationJson;
}
