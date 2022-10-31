package shared

type Privilege struct {
	ChildPrivileges []Privilege `json:"childPrivileges,omitempty"`
	Etag            *string     `json:"etag,omitempty"`
	IsOuScopable    *bool       `json:"isOuScopable,omitempty"`
	Kind            *string     `json:"kind,omitempty"`
	PrivilegeName   *string     `json:"privilegeName,omitempty"`
	ServiceID       *string     `json:"serviceId,omitempty"`
	ServiceName     *string     `json:"serviceName,omitempty"`
}
