package shared

type CloudPubsubTopicPayloadFormatEnum string

const (
	CloudPubsubTopicPayloadFormatEnumPayloadFormatUnspecified CloudPubsubTopicPayloadFormatEnum = "PAYLOAD_FORMAT_UNSPECIFIED"
	CloudPubsubTopicPayloadFormatEnumJSON                     CloudPubsubTopicPayloadFormatEnum = "JSON"
)

type CloudPubsubTopic struct {
	PayloadFormat *CloudPubsubTopicPayloadFormatEnum `json:"payloadFormat"`
	TopicName     *string                            `json:"topicName"`
}
