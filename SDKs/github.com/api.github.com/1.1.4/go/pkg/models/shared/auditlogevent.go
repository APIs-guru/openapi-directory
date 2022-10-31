package shared



type AuditLogEvent struct {
    AtTimestamp *int64 `json:"@timestamp,omitempty"`
    Action *string `json:"action,omitempty"`
    Active *bool `json:"active,omitempty"`
    ActiveWas *bool `json:"active_was,omitempty"`
    Actor *string `json:"actor,omitempty"`
    BlockedUser *string `json:"blocked_user,omitempty"`
    Business *string `json:"business,omitempty"`
    Config []interface{} `json:"config,omitempty"`
    ConfigWas []interface{} `json:"config_was,omitempty"`
    ContentType *string `json:"content_type,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    DeployKeyFingerprint *string `json:"deploy_key_fingerprint,omitempty"`
    Emoji *string `json:"emoji,omitempty"`
    Events []interface{} `json:"events,omitempty"`
    EventsWere []interface{} `json:"events_were,omitempty"`
    Explanation *string `json:"explanation,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    HookID *int64 `json:"hook_id,omitempty"`
    LimitedAvailability *bool `json:"limited_availability,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    OldUser *string `json:"old_user,omitempty"`
    OpensshPublicKey *string `json:"openssh_public_key,omitempty"`
    Org *string `json:"org,omitempty"`
    PreviousVisibility *string `json:"previous_visibility,omitempty"`
    ReadOnly *bool `json:"read_only,omitempty"`
    Repo *string `json:"repo,omitempty"`
    Repository *string `json:"repository,omitempty"`
    RepositoryPublic *bool `json:"repository_public,omitempty"`
    TargetLogin *string `json:"target_login,omitempty"`
    Team *string `json:"team,omitempty"`
    TransportProtocol *int64 `json:"transport_protocol,omitempty"`
    TransportProtocolName *string `json:"transport_protocol_name,omitempty"`
    User *string `json:"user,omitempty"`
    Visibility *string `json:"visibility,omitempty"`
    
}

