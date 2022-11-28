import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsRemoveSamlSsoAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsRemoveSamlSsoAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsRemoveSamlSsoAuthorizationPathParams;
}


export class OrgsRemoveSamlSsoAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
