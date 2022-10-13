package shared

type Like struct {
	Gid  *string      `json:"gid"`
	User *UserCompact `json:"user"`
}
