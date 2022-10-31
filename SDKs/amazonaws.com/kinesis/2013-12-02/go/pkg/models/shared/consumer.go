package shared

import (
"time")

type Consumer struct {
    ConsumerArn string `json:"ConsumerARN"`
    ConsumerCreationTimestamp time.Time `json:"ConsumerCreationTimestamp"`
    ConsumerName string `json:"ConsumerName"`
    ConsumerStatus ConsumerStatusEnum `json:"ConsumerStatus"`
    
}

