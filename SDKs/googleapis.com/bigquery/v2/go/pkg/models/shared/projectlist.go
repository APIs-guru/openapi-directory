package shared

type ProjectListProjects struct {
	FriendlyName     *string           `json:"friendlyName,omitempty"`
	ID               *string           `json:"id,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	NumericID        *string           `json:"numericId,omitempty"`
	ProjectReference *ProjectReference `json:"projectReference,omitempty"`
}

type ProjectList struct {
	Etag          *string               `json:"etag,omitempty"`
	Kind          *string               `json:"kind,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
	Projects      []ProjectListProjects `json:"projects,omitempty"`
	TotalItems    *int32                `json:"totalItems,omitempty"`
}
