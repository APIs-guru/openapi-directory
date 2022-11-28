package shared

type ContentModelsTagMetadataDefinition struct {
	Datatype    *string
	Description *string
	IsRequired  *bool
	Items       []ContentModelsTagMetadataItem
	Name        *string
	Order       *int32
}
