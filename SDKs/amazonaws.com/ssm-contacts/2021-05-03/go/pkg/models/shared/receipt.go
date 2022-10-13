package shared

import (
	"time"
)

type Receipt struct {
	ContactChannelArn *string         `json:"ContactChannelArn"`
	ReceiptInfo       *string         `json:"ReceiptInfo"`
	ReceiptTime       time.Time       `json:"ReceiptTime"`
	ReceiptType       ReceiptTypeEnum `json:"ReceiptType"`
}
