package shared

type CollectionConfiguration struct {
	CollectionName       *string           `json:"CollectionName"`
	CollectionParameters map[string]string `json:"CollectionParameters"`
}
