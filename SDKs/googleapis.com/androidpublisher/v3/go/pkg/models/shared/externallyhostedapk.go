package shared

type ExternallyHostedApk struct {
	ApplicationLabel    *string          `json:"applicationLabel"`
	CertificateBase64s  []string         `json:"certificateBase64s"`
	ExternallyHostedURL *string          `json:"externallyHostedUrl"`
	FileSha1Base64      *string          `json:"fileSha1Base64"`
	FileSha256Base64    *string          `json:"fileSha256Base64"`
	FileSize            *string          `json:"fileSize"`
	IconBase64          *string          `json:"iconBase64"`
	MaximumSdk          *int32           `json:"maximumSdk"`
	MinimumSdk          *int32           `json:"minimumSdk"`
	NativeCodes         []string         `json:"nativeCodes"`
	PackageName         *string          `json:"packageName"`
	UsesFeatures        []string         `json:"usesFeatures"`
	UsesPermissions     []UsesPermission `json:"usesPermissions"`
	VersionCode         *int32           `json:"versionCode"`
	VersionName         *string          `json:"versionName"`
}
