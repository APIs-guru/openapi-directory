package shared

import (
	"time"
)

type UnsampledReportCloudStorageDownloadDetails struct {
	BucketID *string `json:"bucketId,omitempty"`
	ObjectID *string `json:"objectId,omitempty"`
}

type UnsampledReportDriveDownloadDetails struct {
	DocumentID *string `json:"documentId,omitempty"`
}

type UnsampledReport struct {
	AccountID                   *string                                     `json:"accountId,omitempty"`
	CloudStorageDownloadDetails *UnsampledReportCloudStorageDownloadDetails `json:"cloudStorageDownloadDetails,omitempty"`
	Created                     *time.Time                                  `json:"created,omitempty"`
	Dimensions                  *string                                     `json:"dimensions,omitempty"`
	DownloadType                *string                                     `json:"downloadType,omitempty"`
	DriveDownloadDetails        *UnsampledReportDriveDownloadDetails        `json:"driveDownloadDetails,omitempty"`
	EndDate                     *string                                     `json:"end-date,omitempty"`
	Filters                     *string                                     `json:"filters,omitempty"`
	ID                          *string                                     `json:"id,omitempty"`
	Kind                        *string                                     `json:"kind,omitempty"`
	Metrics                     *string                                     `json:"metrics,omitempty"`
	ProfileID                   *string                                     `json:"profileId,omitempty"`
	Segment                     *string                                     `json:"segment,omitempty"`
	SelfLink                    *string                                     `json:"selfLink,omitempty"`
	StartDate                   *string                                     `json:"start-date,omitempty"`
	Status                      *string                                     `json:"status,omitempty"`
	Title                       *string                                     `json:"title,omitempty"`
	Updated                     *time.Time                                  `json:"updated,omitempty"`
	WebPropertyID               *string                                     `json:"webPropertyId,omitempty"`
}
