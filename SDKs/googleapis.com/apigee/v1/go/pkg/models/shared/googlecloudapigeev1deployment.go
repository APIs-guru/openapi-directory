package shared

type GoogleCloudApigeeV1DeploymentStateEnum string

const (
	GoogleCloudApigeeV1DeploymentStateEnumRuntimeStateUnspecified GoogleCloudApigeeV1DeploymentStateEnum = "RUNTIME_STATE_UNSPECIFIED"
	GoogleCloudApigeeV1DeploymentStateEnumReady                   GoogleCloudApigeeV1DeploymentStateEnum = "READY"
	GoogleCloudApigeeV1DeploymentStateEnumProgressing             GoogleCloudApigeeV1DeploymentStateEnum = "PROGRESSING"
	GoogleCloudApigeeV1DeploymentStateEnumError                   GoogleCloudApigeeV1DeploymentStateEnum = "ERROR"
)

type GoogleCloudApigeeV1Deployment struct {
	APIProxy        *string                                                    `json:"apiProxy,omitempty"`
	DeployStartTime *string                                                    `json:"deployStartTime,omitempty"`
	Environment     *string                                                    `json:"environment,omitempty"`
	Errors          []GoogleRPCStatus                                          `json:"errors,omitempty"`
	Instances       []GoogleCloudApigeeV1InstanceDeploymentStatus              `json:"instances,omitempty"`
	Pods            []GoogleCloudApigeeV1PodStatus                             `json:"pods,omitempty"`
	Revision        *string                                                    `json:"revision,omitempty"`
	RouteConflicts  []GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict `json:"routeConflicts,omitempty"`
	ServiceAccount  *string                                                    `json:"serviceAccount,omitempty"`
	State           *GoogleCloudApigeeV1DeploymentStateEnum                    `json:"state,omitempty"`
}
