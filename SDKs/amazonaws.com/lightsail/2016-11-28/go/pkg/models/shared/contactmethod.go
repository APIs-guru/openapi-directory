package shared

import (
	"time"
)

// ContactMethod
// <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
type ContactMethod struct {
	Arn             *string                  `json:"arn,omitempty"`
	ContactEndpoint *string                  `json:"contactEndpoint,omitempty"`
	CreatedAt       *time.Time               `json:"createdAt,omitempty"`
	Location        *ResourceLocation        `json:"location,omitempty"`
	Name            *string                  `json:"name,omitempty"`
	Protocol        *ContactProtocolEnum     `json:"protocol,omitempty"`
	ResourceType    *ResourceTypeEnum        `json:"resourceType,omitempty"`
	Status          *ContactMethodStatusEnum `json:"status,omitempty"`
	SupportCode     *string                  `json:"supportCode,omitempty"`
}
