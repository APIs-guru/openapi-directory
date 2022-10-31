package shared



type Snapshot struct {
    Arn *string `json:"ARN,omitempty"`
    ClusterConfiguration *ClusterConfiguration `json:"ClusterConfiguration,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    Name *string `json:"Name,omitempty"`
    Source *string `json:"Source,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

