package shared

type DestinyComponentsRecordsDestinyProfileRecordsComponent struct {
	ActiveScore                  *int32
	LegacyScore                  *int32
	LifetimeScore                *int32
	RecordCategoriesRootNodeHash *int64
	RecordSealsRootNodeHash      *int64
	Records                      map[string]DestinyComponentsRecordsDestinyRecordComponent
	Score                        *int32
	TrackedRecordHash            *int64
}
