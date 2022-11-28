import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_consumer_key" })
  oauthConsumerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_nonce" })
  oauthNonce: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_signature" })
  oauthSignature: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_signature_method" })
  oauthSignatureMethod: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_timestamp" })
  oauthTimestamp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_verifier" })
  oauthVerifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_version" })
  oauthVersion: string;
}


export class GetAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccessTokenQueryParams;
}


export class GetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccessToken200ApplicationJsonString?: string;
}
