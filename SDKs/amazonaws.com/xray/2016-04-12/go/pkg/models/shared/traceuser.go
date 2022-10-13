package shared

type TraceUser struct {
	ServiceIds []ServiceID `json:"ServiceIds"`
	UserName   *string     `json:"UserName"`
}
