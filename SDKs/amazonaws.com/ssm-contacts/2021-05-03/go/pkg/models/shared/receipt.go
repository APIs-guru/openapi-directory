package shared

import (
"time")

type Receipt struct {
    ContactChannelArn *string `json:"ContactChannelArn,omitempty"`
    ReceiptInfo *string `json:"ReceiptInfo,omitempty"`
    ReceiptTime time.Time `json:"ReceiptTime"`
    ReceiptType ReceiptTypeEnum `json:"ReceiptType"`
    
}

