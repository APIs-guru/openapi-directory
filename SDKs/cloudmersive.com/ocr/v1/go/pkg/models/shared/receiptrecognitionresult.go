package shared

import (
	"time"
)

type ReceiptRecognitionResult struct {
	AddressString   *string           `json:"AddressString"`
	BusinessName    *string           `json:"BusinessName"`
	BusinessWebsite *string           `json:"BusinessWebsite"`
	PhoneNumber     *string           `json:"PhoneNumber"`
	ReceiptItems    []ReceiptLineItem `json:"ReceiptItems"`
	ReceiptSubTotal *float64          `json:"ReceiptSubTotal"`
	ReceiptTotal    *float64          `json:"ReceiptTotal"`
	Successful      *bool             `json:"Successful"`
	Timestamp       *time.Time        `json:"Timestamp"`
}
