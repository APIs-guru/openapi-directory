package shared

type GeneratedSplitApk struct {
	DownloadID *string `json:"downloadId"`
	ModuleName *string `json:"moduleName"`
	SplitID    *string `json:"splitId"`
	VariantID  *int32  `json:"variantId"`
}
