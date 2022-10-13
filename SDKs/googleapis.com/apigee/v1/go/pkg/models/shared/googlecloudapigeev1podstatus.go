package shared

type GoogleCloudApigeeV1PodStatus struct {
	AppVersion           *string `json:"appVersion"`
	DeploymentStatus     *string `json:"deploymentStatus"`
	DeploymentStatusTime *string `json:"deploymentStatusTime"`
	DeploymentTime       *string `json:"deploymentTime"`
	PodName              *string `json:"podName"`
	PodStatus            *string `json:"podStatus"`
	PodStatusTime        *string `json:"podStatusTime"`
	StatusCode           *string `json:"statusCode"`
	StatusCodeDetails    *string `json:"statusCodeDetails"`
}
