package shared

import (
	"time"
)

type GetUploadStatusResponse struct {
	CreatedDate      time.Time        `json:"createdDate"`
	FailureReason    []string         `json:"failureReason"`
	NamespaceArn     *string          `json:"namespaceArn"`
	NamespaceName    *string          `json:"namespaceName"`
	NamespaceVersion *int64           `json:"namespaceVersion"`
	UploadID         string           `json:"uploadId"`
	UploadStatus     UploadStatusEnum `json:"uploadStatus"`
}
