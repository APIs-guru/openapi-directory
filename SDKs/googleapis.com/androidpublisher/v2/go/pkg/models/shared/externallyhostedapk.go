package shared

// ExternallyHostedApk
// Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
type ExternallyHostedApk struct {
	ApplicationLabel    *string                             `json:"applicationLabel,omitempty"`
	CertificateBase64s  []string                            `json:"certificateBase64s,omitempty"`
	ExternallyHostedURL *string                             `json:"externallyHostedUrl,omitempty"`
	FileSha1Base64      *string                             `json:"fileSha1Base64,omitempty"`
	FileSha256Base64    *string                             `json:"fileSha256Base64,omitempty"`
	FileSize            *string                             `json:"fileSize,omitempty"`
	IconBase64          *string                             `json:"iconBase64,omitempty"`
	MaximumSdk          *int32                              `json:"maximumSdk,omitempty"`
	MinimumSdk          *int32                              `json:"minimumSdk,omitempty"`
	NativeCodes         []string                            `json:"nativeCodes,omitempty"`
	PackageName         *string                             `json:"packageName,omitempty"`
	UsesFeatures        []string                            `json:"usesFeatures,omitempty"`
	UsesPermissions     []ExternallyHostedApkUsesPermission `json:"usesPermissions,omitempty"`
	VersionCode         *int32                              `json:"versionCode,omitempty"`
	VersionName         *string                             `json:"versionName,omitempty"`
}
