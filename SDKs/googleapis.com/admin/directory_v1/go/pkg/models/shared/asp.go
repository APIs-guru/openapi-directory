package shared

type Asp struct {
	CodeID       *int32  `json:"codeId"`
	CreationTime *string `json:"creationTime"`
	Etag         *string `json:"etag"`
	Kind         *string `json:"kind"`
	LastTimeUsed *string `json:"lastTimeUsed"`
	Name         *string `json:"name"`
	UserKey      *string `json:"userKey"`
}
