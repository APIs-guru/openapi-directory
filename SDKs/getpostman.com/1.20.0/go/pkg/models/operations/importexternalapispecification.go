package operations

type ImportExternalAPISpecificationRequestBodyInputInfoLicense struct {
	Name *string `json:"name"`
}

type ImportExternalAPISpecificationRequestBodyInputInfo struct {
	License *ImportExternalAPISpecificationRequestBodyInputInfoLicense `json:"license"`
	Title   *string                                                    `json:"title"`
	Version *string                                                    `json:"version"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema struct {
	Format *string `json:"format"`
	Type   *string `json:"type"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters struct {
	Description *string                                                                     `json:"description"`
	In          *string                                                                     `json:"in"`
	Name        *string                                                                     `json:"name"`
	Required    *bool                                                                       `json:"required"`
	Schema      *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema `json:"schema"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode struct {
	Format *string `json:"format"`
	Type   *string `json:"type"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage struct {
	Type *string `json:"type"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties struct {
	Code    *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode    `json:"code"`
	Message *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage `json:"message"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema struct {
	Properties *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties `json:"properties"`
	Required   []string                                                                                                          `json:"required"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON struct {
	Schema *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema `json:"schema"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent struct {
	ApplicationJSON *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON `json:"application/json"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault struct {
	Content     *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent `json:"content"`
	Description *string                                                                            `json:"description"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses struct {
	Default *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault `json:"default"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPetsGet struct {
	OperationID *string                                                                `json:"operationId"`
	Parameters  []ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters `json:"parameters"`
	Responses   *ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses   `json:"responses"`
	Summary     *string                                                                `json:"summary"`
}

type ImportExternalAPISpecificationRequestBodyInputPathsPets struct {
	Get *ImportExternalAPISpecificationRequestBodyInputPathsPetsGet `json:"get"`
}

type ImportExternalAPISpecificationRequestBodyInputPaths struct {
	RootPets *ImportExternalAPISpecificationRequestBodyInputPathsPets `json:"/pets"`
}

type ImportExternalAPISpecificationRequestBodyInputServers struct {
	URL *string `json:"url"`
}

type ImportExternalAPISpecificationRequestBodyInput struct {
	Info    *ImportExternalAPISpecificationRequestBodyInputInfo     `json:"info"`
	Openapi *string                                                 `json:"openapi"`
	Paths   *ImportExternalAPISpecificationRequestBodyInputPaths    `json:"paths"`
	Servers []ImportExternalAPISpecificationRequestBodyInputServers `json:"servers"`
}

type ImportExternalAPISpecificationRequestBody struct {
	Input *ImportExternalAPISpecificationRequestBodyInput `json:"input"`
	Type  *string                                         `json:"type"`
}

type ImportExternalAPISpecificationRequest struct {
	Request *ImportExternalAPISpecificationRequestBody `request:"mediaType=application/json"`
}

type ImportExternalAPISpecification200ApplicationJSONCollections struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type ImportExternalAPISpecification200ApplicationJSON struct {
	Collections []ImportExternalAPISpecification200ApplicationJSONCollections `json:"collections"`
}

type ImportExternalAPISpecification400ApplicationJSONErrorDetails struct {
	Param *string `json:"param"`
}

type ImportExternalAPISpecification400ApplicationJSONError struct {
	Details *ImportExternalAPISpecification400ApplicationJSONErrorDetails `json:"details"`
	Message *string                                                       `json:"message"`
	Name    *string                                                       `json:"name"`
}

type ImportExternalAPISpecification400ApplicationJSON struct {
	Error *ImportExternalAPISpecification400ApplicationJSONError `json:"error"`
}

type ImportExternalAPISpecificationResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ImportExternalAPISpecification200ApplicationJSONObject *ImportExternalAPISpecification200ApplicationJSON
	ImportExternalAPISpecification400ApplicationJSONObject *ImportExternalAPISpecification400ApplicationJSON
}
