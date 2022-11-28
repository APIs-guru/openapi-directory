package shared

// DownloadDbLogFilePortionDetails
// This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.
type DownloadDbLogFilePortionDetails struct {
	AdditionalDataPending *bool
	LogFileData           *string
	Marker                *string
}
