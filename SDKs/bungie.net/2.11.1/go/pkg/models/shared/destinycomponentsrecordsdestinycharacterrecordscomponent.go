package shared

type DestinyComponentsRecordsDestinyCharacterRecordsComponent struct {
	FeaturedRecordHashes         []int64
	RecordCategoriesRootNodeHash *int64
	RecordSealsRootNodeHash      *int64
	Records                      map[string]DestinyComponentsRecordsDestinyRecordComponent
}
