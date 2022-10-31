package shared



type CryptoKey struct {
    Algorithm *string `json:"algorithm,omitempty"`
    Bits *int64 `json:"bits,omitempty"`
    FileHash *string `json:"file_hash,omitempty"`
    FileName *string `json:"file_name,omitempty"`
    PemType *string `json:"pem_type,omitempty"`
    
}

