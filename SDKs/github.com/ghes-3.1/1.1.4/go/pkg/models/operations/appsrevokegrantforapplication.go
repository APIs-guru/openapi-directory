package operations

type AppsRevokeGrantForApplicationPathParams struct {
	AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
	ClientID    string `pathParam:"style=simple,explode=false,name=client_id"`
}

type AppsRevokeGrantForApplicationRequest struct {
	PathParams AppsRevokeGrantForApplicationPathParams
}

type AppsRevokeGrantForApplicationResponse struct {
	ContentType string
	StatusCode  int64
}
