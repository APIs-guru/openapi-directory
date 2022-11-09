import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRequestTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_callback" })
  oauthCallback: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_version" })
  oauthVersion: string;
}


export class GetRequestTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRequestTokenQueryParams;
}


export class GetRequestTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRequestToken200ApplicationJsonString?: string;
}
