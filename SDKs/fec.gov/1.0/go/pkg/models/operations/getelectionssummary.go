package operations

import (
	"openapi/pkg/models/shared"
)

type GetElectionsSummaryOfficeEnum string

const (
	GetElectionsSummaryOfficeEnumHouse     GetElectionsSummaryOfficeEnum = "house"
	GetElectionsSummaryOfficeEnumSenate    GetElectionsSummaryOfficeEnum = "senate"
	GetElectionsSummaryOfficeEnumPresident GetElectionsSummaryOfficeEnum = "president"
)

type GetElectionsSummaryQueryParams struct {
	APIKey       string                        `queryParam:"style=form,explode=true,name=api_key"`
	Cycle        int32                         `queryParam:"style=form,explode=true,name=cycle"`
	District     *string                       `queryParam:"style=form,explode=true,name=district"`
	ElectionFull *bool                         `queryParam:"style=form,explode=true,name=election_full"`
	Office       GetElectionsSummaryOfficeEnum `queryParam:"style=form,explode=true,name=office"`
	State        *string                       `queryParam:"style=form,explode=true,name=state"`
}

type GetElectionsSummaryRequest struct {
	QueryParams GetElectionsSummaryQueryParams
}

type GetElectionsSummaryResponse struct {
	ContentType     string
	ElectionSummary *shared.ElectionSummary
	StatusCode      int64
}
