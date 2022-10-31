package shared




type ReceiptTypeEnum string

const (
    ReceiptTypeEnumDelivered ReceiptTypeEnum = "DELIVERED"
ReceiptTypeEnumError ReceiptTypeEnum = "ERROR"
ReceiptTypeEnumRead ReceiptTypeEnum = "READ"
ReceiptTypeEnumSent ReceiptTypeEnum = "SENT"
ReceiptTypeEnumStop ReceiptTypeEnum = "STOP"
)


