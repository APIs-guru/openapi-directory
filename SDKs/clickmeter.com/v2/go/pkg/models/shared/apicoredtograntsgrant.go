package shared

type APICoreDtoGrantsGrant struct {
	DatapointType *string                               `json:"DatapointType,omitempty" form:"name=DatapointType"`
	Entity        *APICoreResponsesEntityURISystemInt64 `json:"Entity,omitempty" form:"name=Entity"`
	EntityName    *string                               `json:"EntityName,omitempty" form:"name=EntityName"`
	EntityType    *string                               `json:"EntityType,omitempty" form:"name=EntityType"`
	Type          *string                               `json:"Type,omitempty" form:"name=Type"`
}
