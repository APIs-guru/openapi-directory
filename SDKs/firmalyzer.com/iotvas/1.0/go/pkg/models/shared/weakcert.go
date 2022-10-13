package shared

type WeakCert struct {
	FileHash      *string `json:"file_hash"`
	FileName      *string `json:"file_name"`
	SignAlgorithm *string `json:"sign_algorithm"`
	SubjectName   *string `json:"subject_name"`
	ThumbPrint    *string `json:"thumb_print"`
	ValidFrom     *string `json:"valid_from"`
	ValidTo       *string `json:"valid_to"`
}
