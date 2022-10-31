package shared



type WeakCert struct {
    FileHash *string `json:"file_hash,omitempty"`
    FileName *string `json:"file_name,omitempty"`
    SignAlgorithm *string `json:"sign_algorithm,omitempty"`
    SubjectName *string `json:"subject_name,omitempty"`
    ThumbPrint *string `json:"thumb_print,omitempty"`
    ValidFrom *string `json:"valid_from,omitempty"`
    ValidTo *string `json:"valid_to,omitempty"`
    
}

