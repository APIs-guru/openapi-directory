package shared

type AuditLogEvent struct {
	AtTimestamp           *int64        `json:"@timestamp"`
	Action                *string       `json:"action"`
	Active                *bool         `json:"active"`
	ActiveWas             *bool         `json:"active_was"`
	Actor                 *string       `json:"actor"`
	BlockedUser           *string       `json:"blocked_user"`
	Business              *string       `json:"business"`
	Config                []interface{} `json:"config"`
	ConfigWas             []interface{} `json:"config_was"`
	ContentType           *string       `json:"content_type"`
	CreatedAt             *int64        `json:"created_at"`
	DeployKeyFingerprint  *string       `json:"deploy_key_fingerprint"`
	Emoji                 *string       `json:"emoji"`
	Events                []interface{} `json:"events"`
	EventsWere            []interface{} `json:"events_were"`
	Explanation           *string       `json:"explanation"`
	Fingerprint           *string       `json:"fingerprint"`
	HookID                *int64        `json:"hook_id"`
	LimitedAvailability   *bool         `json:"limited_availability"`
	Message               *string       `json:"message"`
	Name                  *string       `json:"name"`
	OldUser               *string       `json:"old_user"`
	OpensshPublicKey      *string       `json:"openssh_public_key"`
	Org                   *string       `json:"org"`
	PreviousVisibility    *string       `json:"previous_visibility"`
	ReadOnly              *bool         `json:"read_only"`
	Repo                  *string       `json:"repo"`
	Repository            *string       `json:"repository"`
	RepositoryPublic      *bool         `json:"repository_public"`
	TargetLogin           *string       `json:"target_login"`
	Team                  *string       `json:"team"`
	TransportProtocol     *int64        `json:"transport_protocol"`
	TransportProtocolName *string       `json:"transport_protocol_name"`
	User                  *string       `json:"user"`
	Visibility            *string       `json:"visibility"`
}
