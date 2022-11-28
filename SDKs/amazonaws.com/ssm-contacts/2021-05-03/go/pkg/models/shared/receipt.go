package shared

import (
	"time"
)

// Receipt
// Records events during an engagement.
type Receipt struct {
	ContactChannelArn *string         `json:"ContactChannelArn,omitempty"`
	ReceiptInfo       *string         `json:"ReceiptInfo,omitempty"`
	ReceiptTime       time.Time       `json:"ReceiptTime"`
	ReceiptType       ReceiptTypeEnum `json:"ReceiptType"`
}
