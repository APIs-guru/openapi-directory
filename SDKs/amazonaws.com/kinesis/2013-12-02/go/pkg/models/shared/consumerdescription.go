package shared

import (
	"time"
)

type ConsumerDescription struct {
	ConsumerArn               string             `json:"ConsumerARN"`
	ConsumerCreationTimestamp time.Time          `json:"ConsumerCreationTimestamp"`
	ConsumerName              string             `json:"ConsumerName"`
	ConsumerStatus            ConsumerStatusEnum `json:"ConsumerStatus"`
	StreamArn                 string             `json:"StreamARN"`
}
