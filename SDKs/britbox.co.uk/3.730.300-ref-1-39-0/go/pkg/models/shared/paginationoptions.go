package shared




type PaginationOptionsItemTypeEnum string

const (
    PaginationOptionsItemTypeEnumMovie PaginationOptionsItemTypeEnum = "movie"
PaginationOptionsItemTypeEnumShow PaginationOptionsItemTypeEnum = "show"
PaginationOptionsItemTypeEnumSeason PaginationOptionsItemTypeEnum = "season"
PaginationOptionsItemTypeEnumEpisode PaginationOptionsItemTypeEnum = "episode"
PaginationOptionsItemTypeEnumProgram PaginationOptionsItemTypeEnum = "program"
PaginationOptionsItemTypeEnumLink PaginationOptionsItemTypeEnum = "link"
PaginationOptionsItemTypeEnumTrailer PaginationOptionsItemTypeEnum = "trailer"
PaginationOptionsItemTypeEnumChannel PaginationOptionsItemTypeEnum = "channel"
PaginationOptionsItemTypeEnumCustomAsset PaginationOptionsItemTypeEnum = "customAsset"
)



type PaginationOptionsOrderEnum string

const (
    PaginationOptionsOrderEnumAsc PaginationOptionsOrderEnum = "asc"
PaginationOptionsOrderEnumDesc PaginationOptionsOrderEnum = "desc"
)



type PaginationOptionsOrderByEnum string

const (
    PaginationOptionsOrderByEnumAz PaginationOptionsOrderByEnum = "a-z"
PaginationOptionsOrderByEnumReleaseYear PaginationOptionsOrderByEnum = "release-year"
PaginationOptionsOrderByEnumDateAdded PaginationOptionsOrderByEnum = "date-added"
)


type PaginationOptions struct {
    Completed *bool `json:"completed,omitempty"`
    ItemType *PaginationOptionsItemTypeEnum `json:"itemType,omitempty"`
    MaxRating *string `json:"maxRating,omitempty"`
    Order *PaginationOptionsOrderEnum `json:"order,omitempty"`
    OrderBy *PaginationOptionsOrderByEnum `json:"orderBy,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    
}

