package shared

type Privilege struct {
	ChildPrivileges []Privilege `json:"childPrivileges"`
	Etag            *string     `json:"etag"`
	IsOuScopable    *bool       `json:"isOuScopable"`
	Kind            *string     `json:"kind"`
	PrivilegeName   *string     `json:"privilegeName"`
	ServiceID       *string     `json:"serviceId"`
	ServiceName     *string     `json:"serviceName"`
}
