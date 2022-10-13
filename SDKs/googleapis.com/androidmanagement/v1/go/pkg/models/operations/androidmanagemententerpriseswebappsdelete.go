package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidmanagementEnterprisesWebAppsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum string

const (
	AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnumWipeDataFlagUnspecified     AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum = "WIPE_DATA_FLAG_UNSPECIFIED"
	AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnumPreserveResetProtectionData AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum = "PRESERVE_RESET_PROTECTION_DATA"
	AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnumWipeExternalStorage         AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum = "WIPE_EXTERNAL_STORAGE"
)

type AndroidmanagementEnterprisesWebAppsDeleteQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                            `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                      `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                              `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                      `queryParam:"style=form,explode=true,name=callback"`
	Fields            *string                                                      `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                      `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string                                                      `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                                        `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                      `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string                                                      `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                      `queryParam:"style=form,explode=true,name=upload_protocol"`
	WipeDataFlags     []AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum `queryParam:"style=form,explode=true,name=wipeDataFlags"`
	WipeReasonMessage *string                                                      `queryParam:"style=form,explode=true,name=wipeReasonMessage"`
}

type AndroidmanagementEnterprisesWebAppsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidmanagementEnterprisesWebAppsDeleteRequest struct {
	PathParams  AndroidmanagementEnterprisesWebAppsDeletePathParams
	QueryParams AndroidmanagementEnterprisesWebAppsDeleteQueryParams
	Security    AndroidmanagementEnterprisesWebAppsDeleteSecurity
}

type AndroidmanagementEnterprisesWebAppsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
