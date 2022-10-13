package operations

type CreateAPIQueryParams struct {
	Workspace *string `queryParam:"style=form,explode=true,name=workspace"`
}

type CreateAPIRequestBodyAPI struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
}

type CreateAPIRequestBody struct {
	API *CreateAPIRequestBodyAPI `json:"api"`
}

type CreateAPIRequest struct {
	QueryParams CreateAPIQueryParams
	Request     *CreateAPIRequestBody `request:"mediaType=application/json"`
}

type CreateAPI200ApplicationJSONAPI struct {
	CreatedAt   *string `json:"createdAt"`
	CreatedBy   *string `json:"createdBy"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
	UpdatedAt   *string `json:"updatedAt"`
}

type CreateAPI200ApplicationJSON struct {
	API *CreateAPI200ApplicationJSONAPI `json:"api"`
}

type CreateAPIResponse struct {
	ContentType                       string
	StatusCode                        int64
	CreateAPI200ApplicationJSONObject *CreateAPI200ApplicationJSON
}
