package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherReviewsListPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherReviewsListQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults          *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartIndex          *int64          `queryParam:"style=form,explode=true,name=startIndex"`
	Token               *string         `queryParam:"style=form,explode=true,name=token"`
	TranslationLanguage *string         `queryParam:"style=form,explode=true,name=translationLanguage"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherReviewsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherReviewsListRequest struct {
	PathParams  AndroidpublisherReviewsListPathParams
	QueryParams AndroidpublisherReviewsListQueryParams
	Security    AndroidpublisherReviewsListSecurity
}

type AndroidpublisherReviewsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
