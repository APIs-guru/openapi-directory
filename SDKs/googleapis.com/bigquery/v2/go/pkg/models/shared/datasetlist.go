package shared

type DatasetListDatasets struct {
	DatasetReference *DatasetReference `json:"datasetReference"`
	FriendlyName     *string           `json:"friendlyName"`
	ID               *string           `json:"id"`
	Kind             *string           `json:"kind"`
	Labels           map[string]string `json:"labels"`
	Location         *string           `json:"location"`
}

type DatasetList struct {
	Datasets      []DatasetListDatasets `json:"datasets"`
	Etag          *string               `json:"etag"`
	Kind          *string               `json:"kind"`
	NextPageToken *string               `json:"nextPageToken"`
}
