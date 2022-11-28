package shared

// AccessRules
// <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>
type AccessRules struct {
	AllowPublicOverrides *bool           `json:"allowPublicOverrides,omitempty"`
	GetObject            *AccessTypeEnum `json:"getObject,omitempty"`
}
