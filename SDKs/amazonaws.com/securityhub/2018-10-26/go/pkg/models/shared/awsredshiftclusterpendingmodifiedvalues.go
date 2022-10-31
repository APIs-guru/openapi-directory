package shared



type AwsRedshiftClusterPendingModifiedValues struct {
    AutomatedSnapshotRetentionPeriod *int64 `json:"AutomatedSnapshotRetentionPeriod,omitempty"`
    ClusterIdentifier *string `json:"ClusterIdentifier,omitempty"`
    ClusterType *string `json:"ClusterType,omitempty"`
    ClusterVersion *string `json:"ClusterVersion,omitempty"`
    EncryptionType *string `json:"EncryptionType,omitempty"`
    EnhancedVpcRouting *bool `json:"EnhancedVpcRouting,omitempty"`
    MaintenanceTrackName *string `json:"MaintenanceTrackName,omitempty"`
    MasterUserPassword *string `json:"MasterUserPassword,omitempty"`
    NodeType *string `json:"NodeType,omitempty"`
    NumberOfNodes *int64 `json:"NumberOfNodes,omitempty"`
    PubliclyAccessible *bool `json:"PubliclyAccessible,omitempty"`
    
}

