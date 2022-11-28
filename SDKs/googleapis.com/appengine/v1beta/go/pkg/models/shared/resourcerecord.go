package shared

type ResourceRecordTypeEnum string

const (
	ResourceRecordTypeEnumA     ResourceRecordTypeEnum = "A"
	ResourceRecordTypeEnumAaaa  ResourceRecordTypeEnum = "AAAA"
	ResourceRecordTypeEnumCname ResourceRecordTypeEnum = "CNAME"
)

// ResourceRecord
// A DNS resource record.
type ResourceRecord struct {
	Name   *string                 `json:"name,omitempty"`
	Rrdata *string                 `json:"rrdata,omitempty"`
	Type   *ResourceRecordTypeEnum `json:"type,omitempty"`
}
