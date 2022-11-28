package shared

// GeneratedSplitApk
// Download metadata for a split APK.
type GeneratedSplitApk struct {
	DownloadID *string `json:"downloadId,omitempty"`
	ModuleName *string `json:"moduleName,omitempty"`
	SplitID    *string `json:"splitId,omitempty"`
	VariantID  *int32  `json:"variantId,omitempty"`
}
