import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUserRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RequestUserRolesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestUserRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestUserRolesPathParams;

  @Metadata()
  headers: RequestUserRolesHeaders;
}


export class RequestUserRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleList?: shared.RoleList;

  @Metadata()
  statusCode: number;
}
