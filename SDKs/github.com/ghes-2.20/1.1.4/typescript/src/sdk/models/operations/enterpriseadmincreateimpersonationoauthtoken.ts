import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreateImpersonationOAuthTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class EnterpriseAdminCreateImpersonationOAuthTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminCreateImpersonationOAuthTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
}


export class EnterpriseAdminCreateImpersonationOAuthTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorization?: shared.Authorization;
}
