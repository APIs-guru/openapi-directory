import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_membership_gid" })
  projectMembershipGid: string;
}


export class GetProjectMembershipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetProjectMembership200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ProjectMembershipResponse;
}


export class GetProjectMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectMembershipPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectMembershipQueryParams;
}


export class GetProjectMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProjectMembership200ApplicationJsonObject?: GetProjectMembership200ApplicationJson;
}
