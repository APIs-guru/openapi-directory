package operations

import (
	"openapi/pkg/models/shared"
)

type ListImagesEmbargoedEnum string

const (
	ListImagesEmbargoedEnumInclude ListImagesEmbargoedEnum = "include"
	ListImagesEmbargoedEnumExclude ListImagesEmbargoedEnum = "exclude"
	ListImagesEmbargoedEnumOnly    ListImagesEmbargoedEnum = "only"
)

type ListImagesImageTypeEnum string

const (
	ListImagesImageTypeEnumStandard  ListImagesImageTypeEnum = "standard"
	ListImagesImageTypeEnumPodcast   ListImagesImageTypeEnum = "podcast"
	ListImagesImageTypeEnumStore     ListImagesImageTypeEnum = "store"
	ListImagesImageTypeEnumPortrait  ListImagesImageTypeEnum = "portrait"
	ListImagesImageTypeEnumLetterbox ListImagesImageTypeEnum = "letterbox"
)

type ListImagesSortEnum string

const (
	ListImagesSortEnumGroupPosition ListImagesSortEnum = "group_position"
	ListImagesSortEnumPid           ListImagesSortEnum = "pid"
)

type ListImagesSortDirectionEnum string

const (
	ListImagesSortDirectionEnumAscending  ListImagesSortDirectionEnum = "ascending"
	ListImagesSortDirectionEnumDescending ListImagesSortDirectionEnum = "descending"
)

type ListImagesQueryParams struct {
	Embargoed           *ListImagesEmbargoedEnum     `queryParam:"style=form,explode=true,name=embargoed"`
	Group               *string                      `queryParam:"style=form,explode=true,name=group"`
	ImageType           []ListImagesImageTypeEnum    `queryParam:"style=form,explode=true,name=image_type"`
	IsAlternateImageFor *string                      `queryParam:"style=form,explode=true,name=is_alternate_image_for"`
	IsImageFor          *string                      `queryParam:"style=form,explode=true,name=is_image_for"`
	Page                *int64                       `queryParam:"style=form,explode=true,name=page"`
	PageSize            *int64                       `queryParam:"style=form,explode=true,name=page_size"`
	PartnerID           []string                     `queryParam:"style=form,explode=true,name=partner_id"`
	PartnerPid          []string                     `queryParam:"style=form,explode=true,name=partner_pid"`
	Pid                 []string                     `queryParam:"style=form,explode=true,name=pid"`
	Q                   *string                      `queryParam:"style=form,explode=true,name=q"`
	Sort                *ListImagesSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	SortDirection       *ListImagesSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
}

type ListImagesRequest struct {
	QueryParams ListImagesQueryParams
}

type ListImagesResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Nitro       *interface{}
}
