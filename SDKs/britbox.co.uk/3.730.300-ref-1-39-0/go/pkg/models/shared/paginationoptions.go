package shared

type PaginationOptionsItemTypeEnum string

const (
	PaginationOptionsItemTypeEnumMovie       PaginationOptionsItemTypeEnum = "movie"
	PaginationOptionsItemTypeEnumShow        PaginationOptionsItemTypeEnum = "show"
	PaginationOptionsItemTypeEnumSeason      PaginationOptionsItemTypeEnum = "season"
	PaginationOptionsItemTypeEnumEpisode     PaginationOptionsItemTypeEnum = "episode"
	PaginationOptionsItemTypeEnumProgram     PaginationOptionsItemTypeEnum = "program"
	PaginationOptionsItemTypeEnumLink        PaginationOptionsItemTypeEnum = "link"
	PaginationOptionsItemTypeEnumTrailer     PaginationOptionsItemTypeEnum = "trailer"
	PaginationOptionsItemTypeEnumChannel     PaginationOptionsItemTypeEnum = "channel"
	PaginationOptionsItemTypeEnumCustomAsset PaginationOptionsItemTypeEnum = "customAsset"
)

type PaginationOptionsOrderEnum string

const (
	PaginationOptionsOrderEnumAsc  PaginationOptionsOrderEnum = "asc"
	PaginationOptionsOrderEnumDesc PaginationOptionsOrderEnum = "desc"
)

type PaginationOptionsOrderByEnum string

const (
	PaginationOptionsOrderByEnumAz          PaginationOptionsOrderByEnum = "a-z"
	PaginationOptionsOrderByEnumReleaseYear PaginationOptionsOrderByEnum = "release-year"
	PaginationOptionsOrderByEnumDateAdded   PaginationOptionsOrderByEnum = "date-added"
)

type PaginationOptions struct {
	Completed *bool                          `json:"completed"`
	ItemType  *PaginationOptionsItemTypeEnum `json:"itemType"`
	MaxRating *string                        `json:"maxRating"`
	Order     *PaginationOptionsOrderEnum    `json:"order"`
	OrderBy   *PaginationOptionsOrderByEnum  `json:"orderBy"`
	PageSize  *int32                         `json:"pageSize"`
}
