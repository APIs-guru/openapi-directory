package shared

type UserList struct {
	Sum   int32  `json:"sum"`
	Users []User `json:"users"`
}
