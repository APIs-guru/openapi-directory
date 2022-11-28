import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRequestTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_callback" })
  oauthCallback: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_version" })
  oauthVersion: string;
}


export class GetRequestTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRequestTokenQueryParams;
}


export class GetRequestTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRequestToken200ApplicationJsonString?: string;
}
