package shared

// Tag
// <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p>
type Tag struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
