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
	BundleRegistration *BundleRegistrationEntity               `json:"bundle_registration"`
	CreatedAt          *time.Time                              `json:"created_at"`
	DownloadMethod     *BundleDownloadEntityDownloadMethodEnum `json:"download_method"`
	Path               *string                                 `json:"path"`
}
