package shared

import (
	"time"
)

// Consumer
// An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
type Consumer struct {
	ConsumerArn               string             `json:"ConsumerARN"`
	ConsumerCreationTimestamp time.Time          `json:"ConsumerCreationTimestamp"`
	ConsumerName              string             `json:"ConsumerName"`
	ConsumerStatus            ConsumerStatusEnum `json:"ConsumerStatus"`
}
