package shared

type AccessTypeEnum string

const (
	AccessTypeEnumReadOnly AccessTypeEnum = "readOnly"
	AccessTypeEnumFull     AccessTypeEnum = "full"
	AccessTypeEnumCustom   AccessTypeEnum = "custom"
)
