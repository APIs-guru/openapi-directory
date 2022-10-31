package operations

import (
	"openapi/pkg/models/shared"
)

type ListPeopleHasExternalIDEnum string

const (
	ListPeopleHasExternalIDEnumTrue  ListPeopleHasExternalIDEnum = "true"
	ListPeopleHasExternalIDEnumFalse ListPeopleHasExternalIDEnum = "false"
)

type ListPeopleQueryParams struct {
	Authority     *string                       `queryParam:"style=form,explode=true,name=authority"`
	HasExternalID []ListPeopleHasExternalIDEnum `queryParam:"style=form,explode=true,name=has_external_id"`
	ID            []string                      `queryParam:"style=form,explode=true,name=id"`
	IDType        *string                       `queryParam:"style=form,explode=true,name=id_type"`
	Page          *int64                        `queryParam:"style=form,explode=true,name=page"`
	PageSize      *int64                        `queryParam:"style=form,explode=true,name=page_size"`
	PartnerID     []string                      `queryParam:"style=form,explode=true,name=partner_id"`
	PartnerPid    []string                      `queryParam:"style=form,explode=true,name=partner_pid"`
	Pid           []string                      `queryParam:"style=form,explode=true,name=pid"`
	Programme     *string                       `queryParam:"style=form,explode=true,name=programme"`
	Q             *string                       `queryParam:"style=form,explode=true,name=q"`
}

type ListPeopleRequest struct {
	QueryParams ListPeopleQueryParams
}

type ListPeopleResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Nitro       *interface{}
}
