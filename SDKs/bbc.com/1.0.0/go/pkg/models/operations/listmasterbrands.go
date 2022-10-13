package operations

import (
	"openapi/pkg/models/shared"
)

type ListMasterbrandsMixinEnum string

const (
	ListMasterbrandsMixinEnumImages ListMasterbrandsMixinEnum = "images"
)

type ListMasterbrandsSortEnum string

const (
	ListMasterbrandsSortEnumMid ListMasterbrandsSortEnum = "mid"
)

type ListMasterbrandsSortDirectionEnum string

const (
	ListMasterbrandsSortDirectionEnumAscending ListMasterbrandsSortDirectionEnum = "ascending"
)

type ListMasterbrandsQueryParams struct {
	Mid           []string                           `queryParam:"style=form,explode=true,name=mid"`
	Mixin         []ListMasterbrandsMixinEnum        `queryParam:"style=form,explode=true,name=mixin"`
	Page          *int64                             `queryParam:"style=form,explode=true,name=page"`
	PageSize      *int64                             `queryParam:"style=form,explode=true,name=page_size"`
	PartnerID     []string                           `queryParam:"style=form,explode=true,name=partner_id"`
	PartnerPid    []string                           `queryParam:"style=form,explode=true,name=partner_pid"`
	Q             *string                            `queryParam:"style=form,explode=true,name=q"`
	Sort          *ListMasterbrandsSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	SortDirection *ListMasterbrandsSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
}

type ListMasterbrandsRequest struct {
	QueryParams ListMasterbrandsQueryParams
}

type ListMasterbrandsResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Nitro       *interface{}
}
