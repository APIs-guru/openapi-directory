package shared

type DatasetListDatasets struct {
	DatasetReference *DatasetReference `json:"datasetReference,omitempty"`
	FriendlyName     *string           `json:"friendlyName,omitempty"`
	ID               *string           `json:"id,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	Location         *string           `json:"location,omitempty"`
}

type DatasetList struct {
	Datasets      []DatasetListDatasets `json:"datasets,omitempty"`
	Etag          *string               `json:"etag,omitempty"`
	Kind          *string               `json:"kind,omitempty"`
	NextPageToken *string               `json:"nextPageToken,omitempty"`
}
