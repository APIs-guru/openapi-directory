package operations

type CreateAPIQueryParams struct {
	Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
}

type CreateAPIRequestBodyAPI struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
}

type CreateAPIRequestBody struct {
	API *CreateAPIRequestBodyAPI `json:"api,omitempty"`
}

type CreateAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt,omitempty"`
	CreatedBy   *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
	UpdatedAt   *string `json:"updatedAt,omitempty"`
}

type CreateAPI200ApplicationJSON struct {
	API *CreateAPI200ApplicationJSONAPI `json:"api,omitempty"`
}

type CreateAPIRequest struct {
	QueryParams CreateAPIQueryParams
	Request     *CreateAPIRequestBody `request:"mediaType=application/json"`
}

type CreateAPIResponse struct {
	ContentType                       string
	StatusCode                        int64
	CreateAPI200ApplicationJSONObject *CreateAPI200ApplicationJSON
}
