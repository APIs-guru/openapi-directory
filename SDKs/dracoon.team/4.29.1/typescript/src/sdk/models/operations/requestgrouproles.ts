import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestGroupRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RequestGroupRolesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestGroupRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestGroupRolesPathParams;

  @Metadata()
  headers: RequestGroupRolesHeaders;
}


export class RequestGroupRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleList?: shared.RoleList;

  @Metadata()
  statusCode: number;
}
