package operations

type GetAllAPIVersionsPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetAllAPIVersionsRequest struct {
	PathParams GetAllAPIVersionsPathParams
}

type GetAllAPIVersions200ApplicationJSONVersions struct {
	CreatedAt   *string `json:"createdAt"`
	CreatedBy   *string `json:"createdBy"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
	UpdatedAt   *string `json:"updatedAt"`
}

type GetAllAPIVersions200ApplicationJSON struct {
	Versions []GetAllAPIVersions200ApplicationJSONVersions `json:"versions"`
}

type GetAllAPIVersionsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetAllAPIVersions200ApplicationJSONObject *GetAllAPIVersions200ApplicationJSON
}
