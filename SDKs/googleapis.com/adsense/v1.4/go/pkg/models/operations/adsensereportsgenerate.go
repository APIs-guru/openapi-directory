package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseReportsGenerateQueryParams struct {
	AccountID            []string        `queryParam:"style=form,explode=true,name=accountId"`
	Alt                  *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Currency             *string         `queryParam:"style=form,explode=true,name=currency"`
	Dimension            []string        `queryParam:"style=form,explode=true,name=dimension"`
	EndDate              string          `queryParam:"style=form,explode=true,name=endDate"`
	Fields               *string         `queryParam:"style=form,explode=true,name=fields"`
	Filter               []string        `queryParam:"style=form,explode=true,name=filter"`
	Key                  *string         `queryParam:"style=form,explode=true,name=key"`
	Locale               *string         `queryParam:"style=form,explode=true,name=locale"`
	MaxResults           *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	Metric               []string        `queryParam:"style=form,explode=true,name=metric"`
	OauthToken           *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint          *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser            *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Sort                 []string        `queryParam:"style=form,explode=true,name=sort"`
	StartDate            string          `queryParam:"style=form,explode=true,name=startDate"`
	StartIndex           *int64          `queryParam:"style=form,explode=true,name=startIndex"`
	UseTimezoneReporting *bool           `queryParam:"style=form,explode=true,name=useTimezoneReporting"`
	UserIP               *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseReportsGenerateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseReportsGenerateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseReportsGenerateSecurity struct {
	Option1 *AdsenseReportsGenerateSecurityOption1 `security:"option"`
	Option2 *AdsenseReportsGenerateSecurityOption2 `security:"option"`
}

type AdsenseReportsGenerateRequest struct {
	QueryParams AdsenseReportsGenerateQueryParams
	Security    AdsenseReportsGenerateSecurity
}

type AdsenseReportsGenerateResponse struct {
	AdsenseReportsGenerateResponse *shared.AdsenseReportsGenerateResponse
	ContentType                    string
	StatusCode                     int64
}
