import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminUnsuspendUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminUnsuspendUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


export class EnterpriseAdminUnsuspendUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUnsuspendUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUnsuspendUserRequestBody;
}


export class EnterpriseAdminUnsuspendUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
