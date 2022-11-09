import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsRemoveSamlSsoAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credential_id" })
  credentialId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsRemoveSamlSsoAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsRemoveSamlSsoAuthorizationPathParams;
}


export class OrgsRemoveSamlSsoAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
