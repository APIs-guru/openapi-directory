package shared

type User struct {
	DollarID          string                 `json:"$id"`
	Email             string                 `json:"email"`
	EmailVerification bool                   `json:"emailVerification"`
	Name              string                 `json:"name"`
	PasswordUpdate    int32                  `json:"passwordUpdate"`
	Prefs             map[string]interface{} `json:"prefs"`
	Registration      int32                  `json:"registration"`
	Status            int32                  `json:"status"`
}
