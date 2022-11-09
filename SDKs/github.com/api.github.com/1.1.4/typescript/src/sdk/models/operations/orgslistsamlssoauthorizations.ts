import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListSamlSsoAuthorizationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListSamlSsoAuthorizationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListSamlSsoAuthorizationsPathParams;
}


export class OrgsListSamlSsoAuthorizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CredentialAuthorization })
  credentialAuthorizations?: shared.CredentialAuthorization[];
}
