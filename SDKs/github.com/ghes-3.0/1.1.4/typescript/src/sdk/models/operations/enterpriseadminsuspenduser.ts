import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminSuspendUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminSuspendUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class EnterpriseAdminSuspendUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminSuspendUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminSuspendUserRequestBody;
}


export class EnterpriseAdminSuspendUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
