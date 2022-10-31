package shared

import (
"time")

type CommandPlugin struct {
    Name *string `json:"Name,omitempty"`
    Output *string `json:"Output,omitempty"`
    OutputS3BucketName *string `json:"OutputS3BucketName,omitempty"`
    OutputS3KeyPrefix *string `json:"OutputS3KeyPrefix,omitempty"`
    OutputS3Region *string `json:"OutputS3Region,omitempty"`
    ResponseCode *int64 `json:"ResponseCode,omitempty"`
    ResponseFinishDateTime *time.Time `json:"ResponseFinishDateTime,omitempty"`
    ResponseStartDateTime *time.Time `json:"ResponseStartDateTime,omitempty"`
    StandardErrorURL *string `json:"StandardErrorUrl,omitempty"`
    StandardOutputURL *string `json:"StandardOutputUrl,omitempty"`
    Status *CommandPluginStatusEnum `json:"Status,omitempty"`
    StatusDetails *string `json:"StatusDetails,omitempty"`
    
}

