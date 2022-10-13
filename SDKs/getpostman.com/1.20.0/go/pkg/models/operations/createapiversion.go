package operations

type CreateAPIVersionPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type CreateAPIVersionRequestBodyVersionSourceRelations struct {
	Documentation *bool `json:"documentation"`
	Mock          *bool `json:"mock"`
	Monitor       *bool `json:"monitor"`
}

type CreateAPIVersionRequestBodyVersionSource struct {
	ID        *string                                            `json:"id"`
	Relations *CreateAPIVersionRequestBodyVersionSourceRelations `json:"relations"`
	Schema    *bool                                              `json:"schema"`
}

type CreateAPIVersionRequestBodyVersion struct {
	Name   *string                                   `json:"name"`
	Source *CreateAPIVersionRequestBodyVersionSource `json:"source"`
}

type CreateAPIVersionRequestBody struct {
	Version *CreateAPIVersionRequestBodyVersion `json:"version"`
}

type CreateAPIVersionRequest struct {
	PathParams CreateAPIVersionPathParams
	Request    *CreateAPIVersionRequestBody `request:"mediaType=application/json"`
}

type CreateAPIVersion200ApplicationJSONVersion struct {
	API  *string `json:"api"`
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type CreateAPIVersion200ApplicationJSON struct {
	Version *CreateAPIVersion200ApplicationJSONVersion `json:"version"`
}

type CreateAPIVersionResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreateAPIVersion200ApplicationJSONObject *CreateAPIVersion200ApplicationJSON
}
