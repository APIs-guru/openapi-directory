package shared

// ApksAddExternallyHostedResponse
// Response for creating a new externally hosted APK.
type ApksAddExternallyHostedResponse struct {
	ExternallyHostedApk *ExternallyHostedApk `json:"externallyHostedApk,omitempty"`
}
