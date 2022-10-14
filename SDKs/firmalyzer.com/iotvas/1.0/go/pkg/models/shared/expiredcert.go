package shared

type ExpiredCert struct {
	FileHash    *string    `json:"file_hash,omitempty"`
	FileName    *string    `json:"file_name,omitempty"`
	PublicKey   *PublicKey `json:"public_key,omitempty"`
	SubjectName *string    `json:"subject_name,omitempty"`
	ThumbPrint  *string    `json:"thumb_print,omitempty"`
	ValidFrom   *string    `json:"valid_from,omitempty"`
	ValidTo     *string    `json:"valid_to,omitempty"`
}
