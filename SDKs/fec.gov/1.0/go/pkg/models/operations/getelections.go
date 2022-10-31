package operations

import (
	"openapi/pkg/models/shared"
)

type GetElectionsOfficeEnum string

const (
	GetElectionsOfficeEnumHouse     GetElectionsOfficeEnum = "house"
	GetElectionsOfficeEnumSenate    GetElectionsOfficeEnum = "senate"
	GetElectionsOfficeEnumPresident GetElectionsOfficeEnum = "president"
)

type GetElectionsQueryParams struct {
	APIKey        string                 `queryParam:"style=form,explode=true,name=api_key"`
	Cycle         int32                  `queryParam:"style=form,explode=true,name=cycle"`
	District      *string                `queryParam:"style=form,explode=true,name=district"`
	ElectionFull  *bool                  `queryParam:"style=form,explode=true,name=election_full"`
	Office        GetElectionsOfficeEnum `queryParam:"style=form,explode=true,name=office"`
	Page          *int32                 `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	Sort          *string                `queryParam:"style=form,explode=true,name=sort"`
	SortHideNull  *bool                  `queryParam:"style=form,explode=true,name=sort_hide_null"`
	SortNullOnly  *bool                  `queryParam:"style=form,explode=true,name=sort_null_only"`
	SortNullsLast *bool                  `queryParam:"style=form,explode=true,name=sort_nulls_last"`
	State         *string                `queryParam:"style=form,explode=true,name=state"`
}

type GetElectionsRequest struct {
	QueryParams GetElectionsQueryParams
}

type GetElectionsResponse struct {
	ContentType  string
	ElectionPage *shared.ElectionPage
	StatusCode   int64
}
