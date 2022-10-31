package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListOutsideCollaboratorsPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListOutsideCollaboratorsFilterEnum string

const (
	OrgsListOutsideCollaboratorsFilterEnumTwofaDisabled OrgsListOutsideCollaboratorsFilterEnum = "2fa_disabled"
	OrgsListOutsideCollaboratorsFilterEnumAll           OrgsListOutsideCollaboratorsFilterEnum = "all"
)

type OrgsListOutsideCollaboratorsQueryParams struct {
	Filter  *OrgsListOutsideCollaboratorsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page    *int64                                  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                  `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListOutsideCollaboratorsRequest struct {
	PathParams  OrgsListOutsideCollaboratorsPathParams
	QueryParams OrgsListOutsideCollaboratorsQueryParams
}

type OrgsListOutsideCollaboratorsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	SimpleUsers []shared.SimpleUser
}
