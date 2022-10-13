package shared

type AdUnits struct {
	Etag          *string  `json:"etag"`
	Items         []AdUnit `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
}
