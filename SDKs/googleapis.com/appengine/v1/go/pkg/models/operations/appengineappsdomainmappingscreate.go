package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsDomainMappingsCreatePathParams struct {
	AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
}

type AppengineAppsDomainMappingsCreateOverrideStrategyEnum string

const (
	AppengineAppsDomainMappingsCreateOverrideStrategyEnumUnspecifiedDomainOverrideStrategy AppengineAppsDomainMappingsCreateOverrideStrategyEnum = "UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY"
	AppengineAppsDomainMappingsCreateOverrideStrategyEnumStrict                            AppengineAppsDomainMappingsCreateOverrideStrategyEnum = "STRICT"
	AppengineAppsDomainMappingsCreateOverrideStrategyEnumOverride                          AppengineAppsDomainMappingsCreateOverrideStrategyEnum = "OVERRIDE"
)

type AppengineAppsDomainMappingsCreateQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                                                `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                                        `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string                                                `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string                                                `queryParam:"style=form,explode=true,name=fields"`
	Key              *string                                                `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	OverrideStrategy *AppengineAppsDomainMappingsCreateOverrideStrategyEnum `queryParam:"style=form,explode=true,name=overrideStrategy"`
	PrettyPrint      *bool                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AppengineAppsDomainMappingsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsDomainMappingsCreateRequest struct {
	PathParams  AppengineAppsDomainMappingsCreatePathParams
	QueryParams AppengineAppsDomainMappingsCreateQueryParams
	Request     *shared.DomainMapping `request:"mediaType=application/json"`
	Security    AppengineAppsDomainMappingsCreateSecurity
}

type AppengineAppsDomainMappingsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
