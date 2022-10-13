package shared

type ExpiredCert struct {
	FileHash    *string    `json:"file_hash"`
	FileName    *string    `json:"file_name"`
	PublicKey   *PublicKey `json:"public_key"`
	SubjectName *string    `json:"subject_name"`
	ThumbPrint  *string    `json:"thumb_print"`
	ValidFrom   *string    `json:"valid_from"`
	ValidTo     *string    `json:"valid_to"`
}
