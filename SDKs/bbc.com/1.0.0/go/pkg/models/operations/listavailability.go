package operations

import (
	"openapi/pkg/models/shared"
)

type ListAvailabilityAvailabilityEnum string

const (
	ListAvailabilityAvailabilityEnumAvailable ListAvailabilityAvailabilityEnum = "available"
)

type ListAvailabilitySortEnum string

const (
	ListAvailabilitySortEnumScheduledStart ListAvailabilitySortEnum = "scheduled_start"
)

type ListAvailabilitySortDirectionEnum string

const (
	ListAvailabilitySortDirectionEnumAscending  ListAvailabilitySortDirectionEnum = "ascending"
	ListAvailabilitySortDirectionEnumDescending ListAvailabilitySortDirectionEnum = "descending"
)

type ListAvailabilityTerritoryEnum string

const (
	ListAvailabilityTerritoryEnumUk    ListAvailabilityTerritoryEnum = "uk"
	ListAvailabilityTerritoryEnumNonuk ListAvailabilityTerritoryEnum = "nonuk"
	ListAvailabilityTerritoryEnumWorld ListAvailabilityTerritoryEnum = "world"
)

type ListAvailabilityQueryParams struct {
	Availability  []ListAvailabilityAvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
	Debug         *bool                              `queryParam:"style=form,explode=true,name=debug"`
	DescendantsOf []string                           `queryParam:"style=form,explode=true,name=descendants_of"`
	MediaSet      []string                           `queryParam:"style=form,explode=true,name=media_set"`
	Page          *int64                             `queryParam:"style=form,explode=true,name=page"`
	PageSize      *int64                             `queryParam:"style=form,explode=true,name=page_size"`
	Sort          *ListAvailabilitySortEnum          `queryParam:"style=form,explode=true,name=sort"`
	SortDirection *ListAvailabilitySortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
	Territory     []ListAvailabilityTerritoryEnum    `queryParam:"style=form,explode=true,name=territory"`
}

type ListAvailabilityRequest struct {
	QueryParams ListAvailabilityQueryParams
}

type ListAvailabilityResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Nitro       *interface{}
}
