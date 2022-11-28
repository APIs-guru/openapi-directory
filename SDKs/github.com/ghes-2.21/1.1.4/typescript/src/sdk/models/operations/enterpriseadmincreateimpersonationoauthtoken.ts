import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreateImpersonationOAuthTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}


export class EnterpriseAdminCreateImpersonationOAuthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminCreateImpersonationOAuthTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
}


export class EnterpriseAdminCreateImpersonationOAuthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorization?: shared.Authorization;
}
