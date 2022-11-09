import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccessTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_consumer_key" })
  oauthConsumerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_nonce" })
  oauthNonce: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_signature" })
  oauthSignature: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_signature_method" })
  oauthSignatureMethod: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_timestamp" })
  oauthTimestamp: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_verifier" })
  oauthVerifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_version" })
  oauthVersion: string;
}


export class GetAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccessTokenQueryParams;
}


export class GetAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAccessToken200ApplicationJsonString?: string;
}
