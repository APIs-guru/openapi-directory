package shared



type GoogleCloudApigeeV1PodStatus struct {
    AppVersion *string `json:"appVersion,omitempty"`
    DeploymentStatus *string `json:"deploymentStatus,omitempty"`
    DeploymentStatusTime *string `json:"deploymentStatusTime,omitempty"`
    DeploymentTime *string `json:"deploymentTime,omitempty"`
    PodName *string `json:"podName,omitempty"`
    PodStatus *string `json:"podStatus,omitempty"`
    PodStatusTime *string `json:"podStatusTime,omitempty"`
    StatusCode *string `json:"statusCode,omitempty"`
    StatusCodeDetails *string `json:"statusCodeDetails,omitempty"`
    
}

