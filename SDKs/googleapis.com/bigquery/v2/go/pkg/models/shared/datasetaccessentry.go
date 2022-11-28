package shared

type DatasetAccessEntryTargetTypesEnum string

const (
	DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified DatasetAccessEntryTargetTypesEnum = "TARGET_TYPE_UNSPECIFIED"
	DatasetAccessEntryTargetTypesEnumViews                 DatasetAccessEntryTargetTypesEnum = "VIEWS"
	DatasetAccessEntryTargetTypesEnumRoutines              DatasetAccessEntryTargetTypesEnum = "ROUTINES"
)

type DatasetAccessEntry struct {
	Dataset     *DatasetReference                   `json:"dataset,omitempty"`
	TargetTypes []DatasetAccessEntryTargetTypesEnum `json:"targetTypes,omitempty"`
}
