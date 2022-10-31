package shared




type ResourceRecordTypeEnum string

const (
    ResourceRecordTypeEnumRecordTypeUnspecified ResourceRecordTypeEnum = "RECORD_TYPE_UNSPECIFIED"
ResourceRecordTypeEnumA ResourceRecordTypeEnum = "A"
ResourceRecordTypeEnumAaaa ResourceRecordTypeEnum = "AAAA"
ResourceRecordTypeEnumCname ResourceRecordTypeEnum = "CNAME"
)


type ResourceRecord struct {
    Name *string `json:"name,omitempty"`
    Rrdata *string `json:"rrdata,omitempty"`
    Type *ResourceRecordTypeEnum `json:"type,omitempty"`
    
}

