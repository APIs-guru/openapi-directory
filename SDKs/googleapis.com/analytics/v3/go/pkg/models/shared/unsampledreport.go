package shared

import (
	"time"
)

// UnsampledReportCloudStorageDownloadDetails
// Download details for a file stored in Google Cloud Storage.
type UnsampledReportCloudStorageDownloadDetails struct {
	BucketID *string `json:"bucketId,omitempty"`
	ObjectID *string `json:"objectId,omitempty"`
}

// UnsampledReportDriveDownloadDetails
// Download details for a file stored in Google Drive.
type UnsampledReportDriveDownloadDetails struct {
	DocumentID *string `json:"documentId,omitempty"`
}

// UnsampledReport
// JSON template for Analytics unsampled report resource.
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

// UnsampledReportInput
// JSON template for Analytics unsampled report resource.
type UnsampledReportInput struct {
	AccountID     *string `json:"accountId,omitempty"`
	Dimensions    *string `json:"dimensions,omitempty"`
	EndDate       *string `json:"end-date,omitempty"`
	Filters       *string `json:"filters,omitempty"`
	ID            *string `json:"id,omitempty"`
	Metrics       *string `json:"metrics,omitempty"`
	ProfileID     *string `json:"profileId,omitempty"`
	Segment       *string `json:"segment,omitempty"`
	StartDate     *string `json:"start-date,omitempty"`
	Title         *string `json:"title,omitempty"`
	WebPropertyID *string `json:"webPropertyId,omitempty"`
}
