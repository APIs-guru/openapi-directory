package shared

import (
	"time"
)

// ConsumerDescription
// An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
type ConsumerDescription struct {
	ConsumerArn               string             `json:"ConsumerARN"`
	ConsumerCreationTimestamp time.Time          `json:"ConsumerCreationTimestamp"`
	ConsumerName              string             `json:"ConsumerName"`
	ConsumerStatus            ConsumerStatusEnum `json:"ConsumerStatus"`
	StreamArn                 string             `json:"StreamARN"`
}
