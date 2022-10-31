package shared

type MessageTypeEnum string

const (
	MessageTypeEnumTransactional MessageTypeEnum = "TRANSACTIONAL"
	MessageTypeEnumPromotional   MessageTypeEnum = "PROMOTIONAL"
)
