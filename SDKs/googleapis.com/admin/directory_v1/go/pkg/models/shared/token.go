package shared

type Token struct {
	Anonymous   *bool    `json:"anonymous"`
	ClientID    *string  `json:"clientId"`
	DisplayText *string  `json:"displayText"`
	Etag        *string  `json:"etag"`
	Kind        *string  `json:"kind"`
	NativeApp   *bool    `json:"nativeApp"`
	Scopes      []string `json:"scopes"`
	UserKey     *string  `json:"userKey"`
}
