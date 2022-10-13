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
	AuthType   *AuthTypeEnum                `json:"auth_type"`
	ConsumerID *string                      `json:"consumer_id"`
	CreatedAt  *string                      `json:"created_at"`
	Enabled    *bool                        `json:"enabled"`
	Icon       *string                      `json:"icon"`
	ID         *string                      `json:"id"`
	Logo       *string                      `json:"logo"`
	Metadata   map[string]interface{}       `json:"metadata"`
	Name       *string                      `json:"name"`
	ServiceID  *string                      `json:"service_id"`
	Settings   map[string]interface{}       `json:"settings"`
	State      *ConsumerConnectionStateEnum `json:"state"`
	TagLine    *string                      `json:"tag_line"`
	UnifiedAPI *string                      `json:"unified_api"`
	UpdatedAt  *string                      `json:"updated_at"`
	Website    *string                      `json:"website"`
}
