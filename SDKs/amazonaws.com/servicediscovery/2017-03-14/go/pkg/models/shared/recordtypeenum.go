package shared

type RecordTypeEnum string

const (
	RecordTypeEnumSrv   RecordTypeEnum = "SRV"
	RecordTypeEnumA     RecordTypeEnum = "A"
	RecordTypeEnumAaaa  RecordTypeEnum = "AAAA"
	RecordTypeEnumCname RecordTypeEnum = "CNAME"
)
