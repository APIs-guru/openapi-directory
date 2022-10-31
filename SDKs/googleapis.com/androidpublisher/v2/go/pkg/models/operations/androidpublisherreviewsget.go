package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherReviewsGetPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	ReviewID    string `pathParam:"style=simple,explode=false,name=reviewId"`
}

type AndroidpublisherReviewsGetQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	TranslationLanguage *string         `queryParam:"style=form,explode=true,name=translationLanguage"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherReviewsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherReviewsGetRequest struct {
	PathParams  AndroidpublisherReviewsGetPathParams
	QueryParams AndroidpublisherReviewsGetQueryParams
	Security    AndroidpublisherReviewsGetSecurity
}

type AndroidpublisherReviewsGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
