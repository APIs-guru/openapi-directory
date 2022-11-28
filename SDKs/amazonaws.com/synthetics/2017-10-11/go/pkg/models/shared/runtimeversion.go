package shared

import (
	"time"
)

// RuntimeVersion
// This structure contains information about one canary runtime version. For more information about runtime versions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
type RuntimeVersion struct {
	DeprecationDate *time.Time `json:"DeprecationDate,omitempty"`
	Description     *string    `json:"Description,omitempty"`
	ReleaseDate     *time.Time `json:"ReleaseDate,omitempty"`
	VersionName     *string    `json:"VersionName,omitempty"`
}
