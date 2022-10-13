package shared

type Alias struct {
	Alias        *string `json:"alias"`
	Etag         *string `json:"etag"`
	ID           *string `json:"id"`
	Kind         *string `json:"kind"`
	PrimaryEmail *string `json:"primaryEmail"`
}
