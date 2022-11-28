package shared

type CloudPubsubTopicPayloadFormatEnum string

const (
	CloudPubsubTopicPayloadFormatEnumPayloadFormatUnspecified CloudPubsubTopicPayloadFormatEnum = "PAYLOAD_FORMAT_UNSPECIFIED"
	CloudPubsubTopicPayloadFormatEnumJSON                     CloudPubsubTopicPayloadFormatEnum = "JSON"
)

// CloudPubsubTopic
// A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
type CloudPubsubTopic struct {
	PayloadFormat *CloudPubsubTopicPayloadFormatEnum `json:"payloadFormat,omitempty"`
	TopicName     *string                            `json:"topicName,omitempty"`
}
