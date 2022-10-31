package shared

type UserModel struct {
	Email    *string `json:"email,omitempty"`
	FullName *string `json:"fullName,omitempty"`
	UserID   *string `json:"userId,omitempty"`
}
