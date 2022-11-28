package shared

type ContentModelsContentTypeDescription struct {
	AllowComments               *bool
	AutoEnglishPropertyFallback *bool
	BindIdentifierToProperty    *string
	BoundRegex                  *string
	BulkUploadable              *bool
	CType                       *string
	ContentDescription          *string
	ForceIdentifierBinding      *bool
	Name                        *string
	PreviewImage                *string
	Previews                    []ContentModelsContentPreview
	Priority                    *int32
	Properties                  []ContentModelsContentTypeProperty
	PropertySections            []ContentModelsContentTypePropertySection
	Reminder                    *string
	ShowInContentEditor         *bool
	SuppressCmsPath             *bool
	TagMetadata                 []ContentModelsTagMetadataDefinition
	TagMetadataItems            map[string]ContentModelsTagMetadataItem
	TypeOf                      *string
	UsageExamples               []string
}
