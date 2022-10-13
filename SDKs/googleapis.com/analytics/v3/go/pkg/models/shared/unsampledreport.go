package shared

import (
	"time"
)

type UnsampledReportCloudStorageDownloadDetails struct {
	BucketID *string `json:"bucketId"`
	ObjectID *string `json:"objectId"`
}

type UnsampledReportDriveDownloadDetails struct {
	DocumentID *string `json:"documentId"`
}

type UnsampledReport struct {
	AccountID                   *string                                     `json:"accountId"`
	CloudStorageDownloadDetails *UnsampledReportCloudStorageDownloadDetails `json:"cloudStorageDownloadDetails"`
	Created                     *time.Time                                  `json:"created"`
	Dimensions                  *string                                     `json:"dimensions"`
	DownloadType                *string                                     `json:"downloadType"`
	DriveDownloadDetails        *UnsampledReportDriveDownloadDetails        `json:"driveDownloadDetails"`
	EndDate                     *string                                     `json:"end-date"`
	Filters                     *string                                     `json:"filters"`
	ID                          *string                                     `json:"id"`
	Kind                        *string                                     `json:"kind"`
	Metrics                     *string                                     `json:"metrics"`
	ProfileID                   *string                                     `json:"profileId"`
	Segment                     *string                                     `json:"segment"`
	SelfLink                    *string                                     `json:"selfLink"`
	StartDate                   *string                                     `json:"start-date"`
	Status                      *string                                     `json:"status"`
	Title                       *string                                     `json:"title"`
	Updated                     *time.Time                                  `json:"updated"`
	WebPropertyID               *string                                     `json:"webPropertyId"`
}
