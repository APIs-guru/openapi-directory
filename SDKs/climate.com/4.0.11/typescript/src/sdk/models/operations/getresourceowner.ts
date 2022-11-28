import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourceOwnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceOwnerId" })
  resourceOwnerId: string;
}


export class GetResourceOwnerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class GetResourceOwnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourceOwnerPathParams;

  @SpeakeasyMetadata()
  security: GetResourceOwnerSecurity;
}


export class GetResourceOwnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  resourceOwner?: shared.ResourceOwner;

  @SpeakeasyMetadata()
  statusCode: number;
}
