import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListSamlSsoAuthorizationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListSamlSsoAuthorizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListSamlSsoAuthorizationsPathParams;
}


export class OrgsListSamlSsoAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CredentialAuthorization })
  credentialAuthorizations?: shared.CredentialAuthorization[];
}
