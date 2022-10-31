package operations

type GetAccessTokenQueryParams struct {
	OauthConsumerKey     string `queryParam:"style=form,explode=true,name=oauth_consumer_key"`
	OauthNonce           string `queryParam:"style=form,explode=true,name=oauth_nonce"`
	OauthSignature       string `queryParam:"style=form,explode=true,name=oauth_signature"`
	OauthSignatureMethod string `queryParam:"style=form,explode=true,name=oauth_signature_method"`
	OauthTimestamp       string `queryParam:"style=form,explode=true,name=oauth_timestamp"`
	OauthToken           string `queryParam:"style=form,explode=true,name=oauth_token"`
	OauthVerifier        string `queryParam:"style=form,explode=true,name=oauth_verifier"`
	OauthVersion         string `queryParam:"style=form,explode=true,name=oauth_version"`
}

type GetAccessTokenRequest struct {
	QueryParams GetAccessTokenQueryParams
}

type GetAccessTokenResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetAccessToken200ApplicationJSONString *string
}
