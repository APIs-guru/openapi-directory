package operations

type ImportExternalAPISpecificationRequestBodyInputInfoLicense struct {
	Name *string `json:"name,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputInfo struct {
	License *ImportExternalAPISpecificationRequestBodyInputInfoLicense `json:"license,omitempty"`
	Title   *string                                                    `json:"title,omitempty"`
	Version *string                                                    `json:"version,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema struct {
	Format *string `json:"format,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters struct {
	Description *string                                                                     `json:"description,omitempty"`
	In          *string                                                                     `json:"in,omitempty"`
	Name        *string                                                                     `json:"name,omitempty"`
	Required    *bool                                                                       `json:"required,omitempty"`
	Schema      *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema `json:"schema,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode struct {
	Format *string `json:"format,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage struct {
	Type *string `json:"type,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties struct {
	Code    *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode    `json:"code,omitempty"`
	Message *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage `json:"message,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema struct {
	Properties *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties `json:"properties,omitempty"`
	Required   []string                                                                                                          `json:"required,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON struct {
	Schema *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema `json:"schema,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent struct {
	ApplicationJSON *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON `json:"application/json,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault struct {
	Content     *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent `json:"content,omitempty"`
	Description *string                                                                            `json:"description,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses struct {
	Default *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault `json:"default,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGet struct {
	OperationID *string                                                                `json:"operationId,omitempty"`
	Parameters  []ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters `json:"parameters,omitempty"`
	Responses   *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses   `json:"responses,omitempty"`
	Summary     *string                                                                `json:"summary,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPets struct {
	Get *ImportExternalAPISpecificationRequestBodyInputPathsPetsGet `json:"get,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputPaths struct {
	RootPets *ImportExternalAPISpecificationRequestBodyInputPathsPets `json:"/pets,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInputServers struct {
	URL *string `json:"url,omitempty"`
}

type ImportExternalAPISpecificationRequestBodyInput struct {
	Info    *ImportExternalAPISpecificationRequestBodyInputInfo     `json:"info,omitempty"`
	Openapi *string                                                 `json:"openapi,omitempty"`
	Paths   *ImportExternalAPISpecificationRequestBodyInputPaths    `json:"paths,omitempty"`
	Servers []ImportExternalAPISpecificationRequestBodyInputServers `json:"servers,omitempty"`
}

type ImportExternalAPISpecificationRequestBody struct {
	Input *ImportExternalAPISpecificationRequestBodyInput `json:"input,omitempty"`
	Type  *string                                         `json:"type,omitempty"`
}

type ImportExternalAPISpecificationRequest struct {
	Request *ImportExternalAPISpecificationRequestBody `request:"mediaType=application/json"`
}

type ImportExternalAPISpecification200ApplicationJSONCollections struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UID  *string `json:"uid,omitempty"`
}

type ImportExternalAPISpecification200ApplicationJSON struct {
	Collections []ImportExternalAPISpecification200ApplicationJSONCollections `json:"collections,omitempty"`
}

type ImportExternalAPISpecification400ApplicationJSONErrorDetails struct {
	Param *string `json:"param,omitempty"`
}

type ImportExternalAPISpecification400ApplicationJSONError struct {
	Details *ImportExternalAPISpecification400ApplicationJSONErrorDetails `json:"details,omitempty"`
	Message *string                                                       `json:"message,omitempty"`
	Name    *string                                                       `json:"name,omitempty"`
}

type ImportExternalAPISpecification400ApplicationJSON struct {
	Error *ImportExternalAPISpecification400ApplicationJSONError `json:"error,omitempty"`
}

type ImportExternalAPISpecificationResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ImportExternalAPISpecification200ApplicationJSONObject *ImportExternalAPISpecification200ApplicationJSON
	ImportExternalAPISpecification400ApplicationJSONObject *ImportExternalAPISpecification400ApplicationJSON
}
