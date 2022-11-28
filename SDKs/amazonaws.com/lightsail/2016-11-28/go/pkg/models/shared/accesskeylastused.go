package shared

import (
	"time"
)

// AccessKeyLastUsed
// <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p> </note>
type AccessKeyLastUsed struct {
	LastUsedDate *time.Time `json:"lastUsedDate,omitempty"`
	Region       *string    `json:"region,omitempty"`
	ServiceName  *string    `json:"serviceName,omitempty"`
}
