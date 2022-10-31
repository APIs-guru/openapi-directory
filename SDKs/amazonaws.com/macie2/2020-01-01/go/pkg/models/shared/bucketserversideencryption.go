package shared



type BucketServerSideEncryption struct {
    KmsMasterKeyID *string `json:"kmsMasterKeyId,omitempty"`
    Type *TypeEnum `json:"type,omitempty"`
    
}

