package shared

type DatasetAccessEntryTargetTypesEnum string

const (
	DatasetAccessEntryTargetTypesEnumTargetTypeUnspecified DatasetAccessEntryTargetTypesEnum = "TARGET_TYPE_UNSPECIFIED"
	DatasetAccessEntryTargetTypesEnumViews                 DatasetAccessEntryTargetTypesEnum = "VIEWS"
)

type DatasetAccessEntry struct {
	Dataset     *DatasetReference                   `json:"dataset"`
	TargetTypes []DatasetAccessEntryTargetTypesEnum `json:"targetTypes"`
}
