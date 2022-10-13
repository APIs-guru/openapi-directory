package shared

import (
	"time"
)

type CommandPlugin struct {
	Name                   *string                  `json:"Name"`
	Output                 *string                  `json:"Output"`
	OutputS3BucketName     *string                  `json:"OutputS3BucketName"`
	OutputS3KeyPrefix      *string                  `json:"OutputS3KeyPrefix"`
	OutputS3Region         *string                  `json:"OutputS3Region"`
	ResponseCode           *int64                   `json:"ResponseCode"`
	ResponseFinishDateTime *time.Time               `json:"ResponseFinishDateTime"`
	ResponseStartDateTime  *time.Time               `json:"ResponseStartDateTime"`
	StandardErrorURL       *string                  `json:"StandardErrorUrl"`
	StandardOutputURL      *string                  `json:"StandardOutputUrl"`
	Status                 *CommandPluginStatusEnum `json:"Status"`
	StatusDetails          *string                  `json:"StatusDetails"`
}
