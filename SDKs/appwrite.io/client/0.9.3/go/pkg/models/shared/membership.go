package shared

type Membership struct {
	DollarID string   `json:"$id"`
	Confirm  bool     `json:"confirm"`
	Email    string   `json:"email"`
	Invited  int32    `json:"invited"`
	Joined   int32    `json:"joined"`
	Name     string   `json:"name"`
	Roles    []string `json:"roles"`
	TeamID   string   `json:"teamId"`
	UserID   string   `json:"userId"`
}
