package operations

import (
"openapi/pkg/models/shared")

type ApigeeOrganizationsSitesApicategoriesDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum string

const (
    ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnumDeletionRetentionUnspecified ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum = "DELETION_RETENTION_UNSPECIFIED"
ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnumMinimum ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum = "MINIMUM"
)


type ApigeeOrganizationsSitesApicategoriesDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Retention *ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum `queryParam:"style=form,explode=true,name=retention"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ApigeeOrganizationsSitesApicategoriesDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApigeeOrganizationsSitesApicategoriesDeleteRequest struct {
    PathParams ApigeeOrganizationsSitesApicategoriesDeletePathParams 
    QueryParams ApigeeOrganizationsSitesApicategoriesDeleteQueryParams 
    Security ApigeeOrganizationsSitesApicategoriesDeleteSecurity 
    
}

type ApigeeOrganizationsSitesApicategoriesDeleteResponse struct {
    ContentType string 
    GoogleCloudApigeeV1APIResponseWrapper *shared.GoogleCloudApigeeV1APIResponseWrapper 
    StatusCode int64 
    
}

