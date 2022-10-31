package shared

type ConsumerConnectionStateEnum string

const (
	ConsumerConnectionStateEnumAvailable  ConsumerConnectionStateEnum = "available"
	ConsumerConnectionStateEnumCallable   ConsumerConnectionStateEnum = "callable"
	ConsumerConnectionStateEnumAdded      ConsumerConnectionStateEnum = "added"
	ConsumerConnectionStateEnumConfigured ConsumerConnectionStateEnum = "configured"
	ConsumerConnectionStateEnumAuthorized ConsumerConnectionStateEnum = "authorized"
)

type ConsumerConnection struct {
	AuthType   *AuthTypeEnum                `json:"auth_type,omitempty"`
	ConsumerID *string                      `json:"consumer_id,omitempty"`
	CreatedAt  *string                      `json:"created_at,omitempty"`
	Enabled    *bool                        `json:"enabled,omitempty"`
	Icon       *string                      `json:"icon,omitempty"`
	ID         *string                      `json:"id,omitempty"`
	Logo       *string                      `json:"logo,omitempty"`
	Metadata   map[string]interface{}       `json:"metadata,omitempty"`
	Name       *string                      `json:"name,omitempty"`
	ServiceID  *string                      `json:"service_id,omitempty"`
	Settings   map[string]interface{}       `json:"settings,omitempty"`
	State      *ConsumerConnectionStateEnum `json:"state,omitempty"`
	TagLine    *string                      `json:"tag_line,omitempty"`
	UnifiedAPI *string                      `json:"unified_api,omitempty"`
	UpdatedAt  *string                      `json:"updated_at,omitempty"`
	Website    *string                      `json:"website,omitempty"`
}
