package operations

type DeleteProjectUsernameProjectBuildCachePathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteProjectUsernameProjectBuildCacheRequest struct {
	PathParams DeleteProjectUsernameProjectBuildCachePathParams
}

type DeleteProjectUsernameProjectBuildCache200ApplicationJSON struct {
	Status *string `json:"status,omitempty"`
}

type DeleteProjectUsernameProjectBuildCacheResponse struct {
	ContentType                                                    string
	DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject *DeleteProjectUsernameProjectBuildCache200ApplicationJSON
	StatusCode                                                     int64
}
