package shared

type DescribeBackupsRequest struct {
	BackupID   *string `json:"BackupId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ServerName *string `json:"ServerName"`
}
