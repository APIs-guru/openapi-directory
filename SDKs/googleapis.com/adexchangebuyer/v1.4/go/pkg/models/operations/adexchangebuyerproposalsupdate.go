package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerProposalsUpdateUpdateActionEnum string

const (
	AdexchangebuyerProposalsUpdateUpdateActionEnumAccept           AdexchangebuyerProposalsUpdateUpdateActionEnum = "accept"
	AdexchangebuyerProposalsUpdateUpdateActionEnumCancel           AdexchangebuyerProposalsUpdateUpdateActionEnum = "cancel"
	AdexchangebuyerProposalsUpdateUpdateActionEnumPropose          AdexchangebuyerProposalsUpdateUpdateActionEnum = "propose"
	AdexchangebuyerProposalsUpdateUpdateActionEnumProposeAndAccept AdexchangebuyerProposalsUpdateUpdateActionEnum = "proposeAndAccept"
	AdexchangebuyerProposalsUpdateUpdateActionEnumUnknownAction    AdexchangebuyerProposalsUpdateUpdateActionEnum = "unknownAction"
	AdexchangebuyerProposalsUpdateUpdateActionEnumUpdateNonTerms   AdexchangebuyerProposalsUpdateUpdateActionEnum = "updateNonTerms"
)

type AdexchangebuyerProposalsUpdatePathParams struct {
	ProposalID     string                                         `pathParam:"style=simple,explode=false,name=proposalId"`
	RevisionNumber string                                         `pathParam:"style=simple,explode=false,name=revisionNumber"`
	UpdateAction   AdexchangebuyerProposalsUpdateUpdateActionEnum `pathParam:"style=simple,explode=false,name=updateAction"`
}

type AdexchangebuyerProposalsUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerProposalsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerProposalsUpdateRequest struct {
	PathParams  AdexchangebuyerProposalsUpdatePathParams
	QueryParams AdexchangebuyerProposalsUpdateQueryParams
	Request     *shared.Proposal `request:"mediaType=application/json"`
	Security    AdexchangebuyerProposalsUpdateSecurity
}

type AdexchangebuyerProposalsUpdateResponse struct {
	ContentType string
	Proposal    *shared.Proposal
	StatusCode  int64
}
