package shared

// Asp
// An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).
type Asp struct {
	CodeID       *int32  `json:"codeId,omitempty"`
	CreationTime *string `json:"creationTime,omitempty"`
	Etag         *string `json:"etag,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	LastTimeUsed *string `json:"lastTimeUsed,omitempty"`
	Name         *string `json:"name,omitempty"`
	UserKey      *string `json:"userKey,omitempty"`
}
