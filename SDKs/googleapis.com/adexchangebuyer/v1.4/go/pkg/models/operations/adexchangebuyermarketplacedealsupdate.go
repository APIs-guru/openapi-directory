package operations

import (
"openapi/pkg/models/shared")

type AdexchangebuyerMarketplacedealsUpdatePathParams struct {
    ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
    
}

type AdexchangebuyerMarketplacedealsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerMarketplacedealsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerMarketplacedealsUpdateRequest struct {
    PathParams AdexchangebuyerMarketplacedealsUpdatePathParams 
    QueryParams AdexchangebuyerMarketplacedealsUpdateQueryParams 
    Request *shared.EditAllOrderDealsRequest `request:"mediaType=application/json"`
    Security AdexchangebuyerMarketplacedealsUpdateSecurity 
    
}

type AdexchangebuyerMarketplacedealsUpdateResponse struct {
    ContentType string 
    EditAllOrderDealsResponse *shared.EditAllOrderDealsResponse 
    StatusCode int64 
    
}

