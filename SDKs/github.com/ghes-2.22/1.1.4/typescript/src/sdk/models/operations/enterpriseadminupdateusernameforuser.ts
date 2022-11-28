import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseAdminUpdateUsernameForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminUpdateUsernameForUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;
}


export class EnterpriseAdminUpdateUsernameForUser202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class EnterpriseAdminUpdateUsernameForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateUsernameForUserPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateUsernameForUserRequestBody;
}


export class EnterpriseAdminUpdateUsernameForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject?: EnterpriseAdminUpdateUsernameForUser202ApplicationJson;
}
