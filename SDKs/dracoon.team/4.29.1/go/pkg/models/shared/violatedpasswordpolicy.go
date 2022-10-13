package shared

type ViolatedPasswordPolicy struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}
