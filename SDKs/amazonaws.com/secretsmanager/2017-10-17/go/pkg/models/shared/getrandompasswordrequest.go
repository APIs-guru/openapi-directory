package shared

type GetRandomPasswordRequest struct {
	ExcludeCharacters       *string `json:"ExcludeCharacters,omitempty"`
	ExcludeLowercase        *bool   `json:"ExcludeLowercase,omitempty"`
	ExcludeNumbers          *bool   `json:"ExcludeNumbers,omitempty"`
	ExcludePunctuation      *bool   `json:"ExcludePunctuation,omitempty"`
	ExcludeUppercase        *bool   `json:"ExcludeUppercase,omitempty"`
	IncludeSpace            *bool   `json:"IncludeSpace,omitempty"`
	PasswordLength          *int64  `json:"PasswordLength,omitempty"`
	RequireEachIncludedType *bool   `json:"RequireEachIncludedType,omitempty"`
}
