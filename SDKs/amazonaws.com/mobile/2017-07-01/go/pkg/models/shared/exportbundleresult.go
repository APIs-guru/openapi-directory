package shared

// ExportBundleResult
//
//	Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources.
type ExportBundleResult struct {
	DownloadURL *string `json:"downloadUrl,omitempty"`
}
