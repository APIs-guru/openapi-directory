package shared

type APICoreDtoGrantsGrant struct {
	DatapointType *string                               `json:"DatapointType" form:"name=DatapointType"`
	Entity        *APICoreResponsesEntityURISystemInt64 `json:"Entity" form:"name=Entity"`
	EntityName    *string                               `json:"EntityName" form:"name=EntityName"`
	EntityType    *string                               `json:"EntityType" form:"name=EntityType"`
	Type          *string                               `json:"Type" form:"name=Type"`
}
