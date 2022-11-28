package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordsFormatPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetRecordsFormatAndCategoryEnum string

const (
	GetRecordsFormatAndCategoryEnumNewspapers       GetRecordsFormatAndCategoryEnum = "Newspapers"
	GetRecordsFormatAndCategoryEnumImages           GetRecordsFormatAndCategoryEnum = "Images"
	GetRecordsFormatAndCategoryEnumBooks            GetRecordsFormatAndCategoryEnum = "Books"
	GetRecordsFormatAndCategoryEnumArticles         GetRecordsFormatAndCategoryEnum = "Articles"
	GetRecordsFormatAndCategoryEnumJournals         GetRecordsFormatAndCategoryEnum = "Journals"
	GetRecordsFormatAndCategoryEnumArchives         GetRecordsFormatAndCategoryEnum = "Archives"
	GetRecordsFormatAndCategoryEnumAudio            GetRecordsFormatAndCategoryEnum = "Audio"
	GetRecordsFormatAndCategoryEnumOther            GetRecordsFormatAndCategoryEnum = "Other"
	GetRecordsFormatAndCategoryEnumManuscripts      GetRecordsFormatAndCategoryEnum = "Manuscripts"
	GetRecordsFormatAndCategoryEnumReferenceSources GetRecordsFormatAndCategoryEnum = "Reference sources"
	GetRecordsFormatAndCategoryEnumResearchPapers   GetRecordsFormatAndCategoryEnum = "Research papers"
	GetRecordsFormatAndCategoryEnumVideos           GetRecordsFormatAndCategoryEnum = "Videos"
	GetRecordsFormatAndCategoryEnumMusicScore       GetRecordsFormatAndCategoryEnum = "Music Score"
	GetRecordsFormatAndCategoryEnumGroups           GetRecordsFormatAndCategoryEnum = "Groups"
	GetRecordsFormatAndCategoryEnumData             GetRecordsFormatAndCategoryEnum = "Data"
	GetRecordsFormatAndCategoryEnumWebsites         GetRecordsFormatAndCategoryEnum = "Websites"
	GetRecordsFormatAndCategoryEnumSets             GetRecordsFormatAndCategoryEnum = "Sets"
)

type GetRecordsFormatAndHasLargeThumbnailURLEnum string

const (
	GetRecordsFormatAndHasLargeThumbnailURLEnumY GetRecordsFormatAndHasLargeThumbnailURLEnum = "Y"
)

type GetRecordsFormatAndUsageEnum string

const (
	GetRecordsFormatAndUsageEnumShare             GetRecordsFormatAndUsageEnum = "Share"
	GetRecordsFormatAndUsageEnumModify            GetRecordsFormatAndUsageEnum = "Modify"
	GetRecordsFormatAndUsageEnumUseCommercially   GetRecordsFormatAndUsageEnum = "Use commercially"
	GetRecordsFormatAndUsageEnumAllRightsReserved GetRecordsFormatAndUsageEnum = "All rights reserved"
	GetRecordsFormatAndUsageEnumUnknown           GetRecordsFormatAndUsageEnum = "Unknown"
)

type GetRecordsFormatDirectionEnum string

const (
	GetRecordsFormatDirectionEnumAsc  GetRecordsFormatDirectionEnum = "asc"
	GetRecordsFormatDirectionEnumDesc GetRecordsFormatDirectionEnum = "desc"
)

type GetRecordsFormatFacetsEnum string

const (
	GetRecordsFormatFacetsEnumCategory          GetRecordsFormatFacetsEnum = "category"
	GetRecordsFormatFacetsEnumContentPartner    GetRecordsFormatFacetsEnum = "content_partner"
	GetRecordsFormatFacetsEnumDisplayCollection GetRecordsFormatFacetsEnum = "display_collection"
	GetRecordsFormatFacetsEnumCollection        GetRecordsFormatFacetsEnum = "collection"
	GetRecordsFormatFacetsEnumCreator           GetRecordsFormatFacetsEnum = "creator"
	GetRecordsFormatFacetsEnumPlacename         GetRecordsFormatFacetsEnum = "placename"
	GetRecordsFormatFacetsEnumDate              GetRecordsFormatFacetsEnum = "date"
	GetRecordsFormatFacetsEnumYear              GetRecordsFormatFacetsEnum = "year"
	GetRecordsFormatFacetsEnumDecade            GetRecordsFormatFacetsEnum = "decade"
	GetRecordsFormatFacetsEnumCentury           GetRecordsFormatFacetsEnum = "century"
	GetRecordsFormatFacetsEnumLanguage          GetRecordsFormatFacetsEnum = "language"
	GetRecordsFormatFacetsEnumRights            GetRecordsFormatFacetsEnum = "rights"
	GetRecordsFormatFacetsEnumUsage             GetRecordsFormatFacetsEnum = "usage"
	GetRecordsFormatFacetsEnumCopyright         GetRecordsFormatFacetsEnum = "copyright"
	GetRecordsFormatFacetsEnumSubject           GetRecordsFormatFacetsEnum = "subject"
	GetRecordsFormatFacetsEnumFormat            GetRecordsFormatFacetsEnum = "format"
	GetRecordsFormatFacetsEnumDcType            GetRecordsFormatFacetsEnum = "dc_type"
)

type GetRecordsFormatSortEnum string

const (
	GetRecordsFormatSortEnumSyndicationDate GetRecordsFormatSortEnum = "syndication_date"
	GetRecordsFormatSortEnumDate            GetRecordsFormatSortEnum = "date"
)

type GetRecordsFormatQueryParams struct {
	AndCategory              *GetRecordsFormatAndCategoryEnum             `queryParam:"style=form,explode=true,name=and[category][]"`
	AndCentury               *string                                      `queryParam:"style=form,explode=true,name=and[century]"`
	AndCollection            *string                                      `queryParam:"style=form,explode=true,name=and[collection][]"`
	AndContentPartner        *string                                      `queryParam:"style=form,explode=true,name=and[content_partner][]"`
	AndCreator               *string                                      `queryParam:"style=form,explode=true,name=and[creator][]"`
	AndDate                  *string                                      `queryParam:"style=form,explode=true,name=and[date]"`
	AndDcType                *string                                      `queryParam:"style=form,explode=true,name=and[dc_type][]"`
	AndDecade                *string                                      `queryParam:"style=form,explode=true,name=and[decade]"`
	AndFormat                *string                                      `queryParam:"style=form,explode=true,name=and[format][]"`
	AndHasLargeThumbnailURL  *GetRecordsFormatAndHasLargeThumbnailURLEnum `queryParam:"style=form,explode=true,name=and[has_large_thumbnail_url]"`
	AndHasLatLng             *bool                                        `queryParam:"style=form,explode=true,name=and[has_lat_lng]"`
	AndIsCommercialUse       *bool                                        `queryParam:"style=form,explode=true,name=and[is_commercial_use]"`
	AndOrFilterField         *string                                      `queryParam:"style=form,explode=true,name=and[or][{filter_field}][]"`
	AndPlacename             *string                                      `queryParam:"style=form,explode=true,name=and[placename][]"`
	AndPrimaryCollection     *string                                      `queryParam:"style=form,explode=true,name=and[primary_collection][]"`
	AndSubject               *string                                      `queryParam:"style=form,explode=true,name=and[subject][]"`
	AndTitle                 *string                                      `queryParam:"style=form,explode=true,name=and[title][]"`
	AndUsage                 *GetRecordsFormatAndUsageEnum                `queryParam:"style=form,explode=true,name=and[usage][]"`
	AndYear                  *string                                      `queryParam:"style=form,explode=true,name=and[year]"`
	APIKey                   string                                       `queryParam:"style=form,explode=true,name=api_key"`
	Direction                *GetRecordsFormatDirectionEnum               `queryParam:"style=form,explode=true,name=direction"`
	ExcludeFiltersFromFacets *bool                                        `queryParam:"style=form,explode=true,name=exclude_filters_from_facets"`
	Facets                   []GetRecordsFormatFacetsEnum                 `queryParam:"style=form,explode=false,name=facets"`
	FacetsPage               *int64                                       `queryParam:"style=form,explode=true,name=facets_page"`
	FacetsPerPage            *int64                                       `queryParam:"style=form,explode=true,name=facets_per_page"`
	Fields                   *string                                      `queryParam:"style=form,explode=false,name=fields"`
	GeoBbox                  *string                                      `queryParam:"style=form,explode=true,name=geo_bbox"`
	Page                     *int64                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage                  *int64                                       `queryParam:"style=form,explode=true,name=per_page"`
	Sort                     *GetRecordsFormatSortEnum                    `queryParam:"style=form,explode=true,name=sort"`
	Text                     *string                                      `queryParam:"style=form,explode=true,name=text"`
	WithoutFilterField       *string                                      `queryParam:"style=form,explode=true,name=without[{filter_field}]"`
}

type GetRecordsFormat200ApplicationJSON struct {
	Facets      map[string]map[string]int64 `json:"facets,omitempty"`
	Page        *int64                      `json:"page,omitempty"`
	PerPage     *int64                      `json:"per_page,omitempty"`
	Records     []shared.Record             `json:"records,omitempty"`
	RequestURL  *string                     `json:"request_url,omitempty"`
	ResultCount *int64                      `json:"result_count,omitempty"`
}

type GetRecordsFormatRequest struct {
	PathParams  GetRecordsFormatPathParams
	QueryParams GetRecordsFormatQueryParams
}

type GetRecordsFormatResponse struct {
	Body                                     []byte
	ContentType                              string
	GetRecordsFormat200ApplicationJSONObject *GetRecordsFormat200ApplicationJSON
	GetRecordsFormat400ApplicationJSONObject map[string]interface{}
	GetRecordsFormat403ApplicationJSONObject map[string]interface{}
	StatusCode                               int64
}
