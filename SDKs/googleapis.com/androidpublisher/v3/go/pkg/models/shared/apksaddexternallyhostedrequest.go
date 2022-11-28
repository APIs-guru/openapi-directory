package shared

// ApksAddExternallyHostedRequest
// Request to create a new externally hosted APK.
type ApksAddExternallyHostedRequest struct {
	ExternallyHostedApk *ExternallyHostedApk `json:"externallyHostedApk,omitempty"`
}
