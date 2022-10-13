package shared

type ProjectListProjects struct {
	FriendlyName     *string           `json:"friendlyName"`
	ID               *string           `json:"id"`
	Kind             *string           `json:"kind"`
	NumericID        *string           `json:"numericId"`
	ProjectReference *ProjectReference `json:"projectReference"`
}

type ProjectList struct {
	Etag          *string               `json:"etag"`
	Kind          *string               `json:"kind"`
	NextPageToken *string               `json:"nextPageToken"`
	Projects      []ProjectListProjects `json:"projects"`
	TotalItems    *int32                `json:"totalItems"`
}
