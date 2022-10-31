package operations

import (
"openapi/pkg/models/shared")


type AdexchangebuyerProposalsPatchUpdateActionEnum string

const (
    AdexchangebuyerProposalsPatchUpdateActionEnumAccept AdexchangebuyerProposalsPatchUpdateActionEnum = "accept"
AdexchangebuyerProposalsPatchUpdateActionEnumCancel AdexchangebuyerProposalsPatchUpdateActionEnum = "cancel"
AdexchangebuyerProposalsPatchUpdateActionEnumPropose AdexchangebuyerProposalsPatchUpdateActionEnum = "propose"
AdexchangebuyerProposalsPatchUpdateActionEnumProposeAndAccept AdexchangebuyerProposalsPatchUpdateActionEnum = "proposeAndAccept"
AdexchangebuyerProposalsPatchUpdateActionEnumUnknownAction AdexchangebuyerProposalsPatchUpdateActionEnum = "unknownAction"
AdexchangebuyerProposalsPatchUpdateActionEnumUpdateNonTerms AdexchangebuyerProposalsPatchUpdateActionEnum = "updateNonTerms"
)


type AdexchangebuyerProposalsPatchPathParams struct {
    ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
    RevisionNumber string `pathParam:"style=simple,explode=false,name=revisionNumber"`
    UpdateAction AdexchangebuyerProposalsPatchUpdateActionEnum `pathParam:"style=simple,explode=false,name=updateAction"`
    
}

type AdexchangebuyerProposalsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerProposalsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerProposalsPatchRequest struct {
    PathParams AdexchangebuyerProposalsPatchPathParams 
    QueryParams AdexchangebuyerProposalsPatchQueryParams 
    Request *shared.Proposal `request:"mediaType=application/json"`
    Security AdexchangebuyerProposalsPatchSecurity 
    
}

type AdexchangebuyerProposalsPatchResponse struct {
    ContentType string 
    Proposal *shared.Proposal 
    StatusCode int64 
    
}

