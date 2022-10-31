package shared



type DescribeBackupsRequest struct {
    BackupID *string `json:"BackupId,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ServerName *string `json:"ServerName,omitempty"`
    
}

