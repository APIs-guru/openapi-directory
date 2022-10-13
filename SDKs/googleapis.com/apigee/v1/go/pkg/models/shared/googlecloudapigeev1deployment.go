package shared

type GoogleCloudApigeeV1DeploymentStateEnum string

const (
	GoogleCloudApigeeV1DeploymentStateEnumRuntimeStateUnspecified GoogleCloudApigeeV1DeploymentStateEnum = "RUNTIME_STATE_UNSPECIFIED"
	GoogleCloudApigeeV1DeploymentStateEnumReady                   GoogleCloudApigeeV1DeploymentStateEnum = "READY"
	GoogleCloudApigeeV1DeploymentStateEnumProgressing             GoogleCloudApigeeV1DeploymentStateEnum = "PROGRESSING"
	GoogleCloudApigeeV1DeploymentStateEnumError                   GoogleCloudApigeeV1DeploymentStateEnum = "ERROR"
)

type GoogleCloudApigeeV1Deployment struct {
	APIProxy        *string                                                    `json:"apiProxy"`
	DeployStartTime *string                                                    `json:"deployStartTime"`
	Environment     *string                                                    `json:"environment"`
	Errors          []GoogleRPCStatus                                          `json:"errors"`
	Instances       []GoogleCloudApigeeV1InstanceDeploymentStatus              `json:"instances"`
	Pods            []GoogleCloudApigeeV1PodStatus                             `json:"pods"`
	Revision        *string                                                    `json:"revision"`
	RouteConflicts  []GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict `json:"routeConflicts"`
	ServiceAccount  *string                                                    `json:"serviceAccount"`
	State           *GoogleCloudApigeeV1DeploymentStateEnum                    `json:"state"`
}
