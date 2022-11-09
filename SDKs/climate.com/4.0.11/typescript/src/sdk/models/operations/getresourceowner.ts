import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourceOwnerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceOwnerId" })
  resourceOwnerId: string;
}


export class GetResourceOwnerSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetResourceOwnerSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class GetResourceOwnerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetResourceOwnerSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetResourceOwnerSecurityOption2;
}


export class GetResourceOwnerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourceOwnerPathParams;

  @Metadata()
  security: GetResourceOwnerSecurity;
}


export class GetResourceOwnerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  resourceOwner?: shared.ResourceOwner;

  @Metadata()
  statusCode: number;
}
