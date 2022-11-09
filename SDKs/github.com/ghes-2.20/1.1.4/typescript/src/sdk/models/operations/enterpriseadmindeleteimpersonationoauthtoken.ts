import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeleteImpersonationOAuthTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminDeleteImpersonationOAuthTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeleteImpersonationOAuthTokenPathParams;
}


export class EnterpriseAdminDeleteImpersonationOAuthTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
