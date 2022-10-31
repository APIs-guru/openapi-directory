package shared




type UploadStatusStatusEnum string

const (
    UploadStatusStatusEnumUploading UploadStatusStatusEnum = "UPLOADING"
UploadStatusStatusEnumInvalid UploadStatusStatusEnum = "INVALID"
UploadStatusStatusEnumPending UploadStatusStatusEnum = "PENDING"
UploadStatusStatusEnumInbox UploadStatusStatusEnum = "INBOX"
UploadStatusStatusEnumDeclined UploadStatusStatusEnum = "DECLINED"
UploadStatusStatusEnumImporting UploadStatusStatusEnum = "IMPORTING"
UploadStatusStatusEnumSuccess UploadStatusStatusEnum = "SUCCESS"
)


type UploadStatus struct {
    ID string `json:"id"`
    Status UploadStatusStatusEnum `json:"status"`
    
}

