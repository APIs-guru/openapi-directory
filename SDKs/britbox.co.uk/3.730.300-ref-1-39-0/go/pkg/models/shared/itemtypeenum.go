package shared

type ItemTypeEnum string

const (
	ItemTypeEnumMovie       ItemTypeEnum = "movie"
	ItemTypeEnumShow        ItemTypeEnum = "show"
	ItemTypeEnumSeason      ItemTypeEnum = "season"
	ItemTypeEnumEpisode     ItemTypeEnum = "episode"
	ItemTypeEnumProgram     ItemTypeEnum = "program"
	ItemTypeEnumLink        ItemTypeEnum = "link"
	ItemTypeEnumTrailer     ItemTypeEnum = "trailer"
	ItemTypeEnumChannel     ItemTypeEnum = "channel"
	ItemTypeEnumCustomAsset ItemTypeEnum = "customAsset"
)
