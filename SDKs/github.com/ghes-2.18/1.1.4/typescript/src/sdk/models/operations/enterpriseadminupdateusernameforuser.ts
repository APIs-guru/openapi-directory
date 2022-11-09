import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminUpdateUsernameForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminUpdateUsernameForUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=login" })
  login: string;
}


export class EnterpriseAdminUpdateUsernameForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateUsernameForUserPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateUsernameForUserRequestBody;
}


export class EnterpriseAdminUpdateUsernameForUser202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseAdminUpdateUsernameForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject?: EnterpriseAdminUpdateUsernameForUser202ApplicationJson;
}
