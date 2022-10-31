package operations

type GetRequestTokenQueryParams struct {
	OauthCallback        string `queryParam:"style=form,explode=true,name=oauth_callback"`
	OauthConsumerKey     string `queryParam:"style=form,explode=true,name=oauth_consumer_key"`
	OauthNonce           string `queryParam:"style=form,explode=true,name=oauth_nonce"`
	OauthSignature       string `queryParam:"style=form,explode=true,name=oauth_signature"`
	OauthSignatureMethod string `queryParam:"style=form,explode=true,name=oauth_signature_method"`
	OauthTimestamp       string `queryParam:"style=form,explode=true,name=oauth_timestamp"`
	OauthVersion         string `queryParam:"style=form,explode=true,name=oauth_version"`
}

type GetRequestTokenRequest struct {
	QueryParams GetRequestTokenQueryParams
}

type GetRequestTokenResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetRequestToken200ApplicationJSONString *string
}
