package shared

import (
	"time"
)

// ReceiptRecognitionResult
// Result of recognizing a receipt, to extract the key information from the receipt
type ReceiptRecognitionResult struct {
	AddressString   *string           `json:"AddressString,omitempty"`
	BusinessName    *string           `json:"BusinessName,omitempty"`
	BusinessWebsite *string           `json:"BusinessWebsite,omitempty"`
	PhoneNumber     *string           `json:"PhoneNumber,omitempty"`
	ReceiptItems    []ReceiptLineItem `json:"ReceiptItems,omitempty"`
	ReceiptSubTotal *float64          `json:"ReceiptSubTotal,omitempty"`
	ReceiptTotal    *float64          `json:"ReceiptTotal,omitempty"`
	Successful      *bool             `json:"Successful,omitempty"`
	Timestamp       *time.Time        `json:"Timestamp,omitempty"`
}
