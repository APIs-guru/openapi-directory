import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRolesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRolesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestRolesHeaders;
}


export class RequestRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleList?: shared.RoleList;

  @Metadata()
  statusCode: number;
}
