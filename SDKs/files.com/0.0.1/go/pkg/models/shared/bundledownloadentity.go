package shared

import (
	"time"
)

type BundleDownloadEntityDownloadMethodEnum string

const (
	BundleDownloadEntityDownloadMethodEnumFile    BundleDownloadEntityDownloadMethodEnum = "file"
	BundleDownloadEntityDownloadMethodEnumFullZip BundleDownloadEntityDownloadMethodEnum = "full_zip"
)

type BundleDownloadEntity struct {
	BundleRegistration *BundleRegistrationEntity               `json:"bundle_registration,omitempty"`
	CreatedAt          *time.Time                              `json:"created_at,omitempty"`
	DownloadMethod     *BundleDownloadEntityDownloadMethodEnum `json:"download_method,omitempty"`
	Path               *string                                 `json:"path,omitempty"`
}
