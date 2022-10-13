package shared

type UserModel struct {
	Email    *string `json:"email"`
	FullName *string `json:"fullName"`
	UserID   *string `json:"userId"`
}
