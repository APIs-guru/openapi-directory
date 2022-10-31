package shared

import (
	"time"
)

type GetUploadStatusResponse struct {
	CreatedDate      time.Time        `json:"createdDate"`
	FailureReason    []string         `json:"failureReason,omitempty"`
	NamespaceArn     *string          `json:"namespaceArn,omitempty"`
	NamespaceName    *string          `json:"namespaceName,omitempty"`
	NamespaceVersion *int64           `json:"namespaceVersion,omitempty"`
	UploadID         string           `json:"uploadId"`
	UploadStatus     UploadStatusEnum `json:"uploadStatus"`
}
