package shared

type HashTypeEnum string

const (
	HashTypeEnumHashTypeUnspecified HashTypeEnum = "HASH_TYPE_UNSPECIFIED"
	HashTypeEnumSha256              HashTypeEnum = "SHA256"
	HashTypeEnumMd5                 HashTypeEnum = "MD5"
)

// Hash
// A hash of file content.
type Hash struct {
	Type  *HashTypeEnum `json:"type,omitempty"`
	Value *string       `json:"value,omitempty"`
}
