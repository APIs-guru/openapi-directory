package operations

type GetAllAPIVersionsPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetAllAPIVersions200ApplicationJSONVersions struct {
	CreatedAt   *string `json:"createdAt,omitempty"`
	CreatedBy   *string `json:"createdBy,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
	UpdatedAt   *string `json:"updatedAt,omitempty"`
}

type GetAllAPIVersions200ApplicationJSON struct {
	Versions []GetAllAPIVersions200ApplicationJSONVersions `json:"versions,omitempty"`
}

type GetAllAPIVersionsRequest struct {
	PathParams GetAllAPIVersionsPathParams
}

type GetAllAPIVersionsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetAllAPIVersions200ApplicationJSONObject *GetAllAPIVersions200ApplicationJSON
}
