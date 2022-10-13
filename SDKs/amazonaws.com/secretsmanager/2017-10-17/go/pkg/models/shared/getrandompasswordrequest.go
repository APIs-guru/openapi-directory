package shared

type GetRandomPasswordRequest struct {
	ExcludeCharacters       *string `json:"ExcludeCharacters"`
	ExcludeLowercase        *bool   `json:"ExcludeLowercase"`
	ExcludeNumbers          *bool   `json:"ExcludeNumbers"`
	ExcludePunctuation      *bool   `json:"ExcludePunctuation"`
	ExcludeUppercase        *bool   `json:"ExcludeUppercase"`
	IncludeSpace            *bool   `json:"IncludeSpace"`
	PasswordLength          *int64  `json:"PasswordLength"`
	RequireEachIncludedType *bool   `json:"RequireEachIncludedType"`
}
