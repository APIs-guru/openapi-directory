package shared

type CommonModelsCoreSetting struct {
	ChildSettings []CommonModelsCoreSetting
	DisplayName   *string
	Identifier    *string
	ImagePath     *string
	IsDefault     *bool
	Summary       *string
}
