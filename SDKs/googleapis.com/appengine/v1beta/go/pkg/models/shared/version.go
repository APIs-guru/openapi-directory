package shared

type VersionInboundServicesEnum string

const (
	VersionInboundServicesEnumInboundServiceUnspecified     VersionInboundServicesEnum = "INBOUND_SERVICE_UNSPECIFIED"
	VersionInboundServicesEnumInboundServiceMail            VersionInboundServicesEnum = "INBOUND_SERVICE_MAIL"
	VersionInboundServicesEnumInboundServiceMailBounce      VersionInboundServicesEnum = "INBOUND_SERVICE_MAIL_BOUNCE"
	VersionInboundServicesEnumInboundServiceXMPPError       VersionInboundServicesEnum = "INBOUND_SERVICE_XMPP_ERROR"
	VersionInboundServicesEnumInboundServiceXMPPMessage     VersionInboundServicesEnum = "INBOUND_SERVICE_XMPP_MESSAGE"
	VersionInboundServicesEnumInboundServiceXMPPSubscribe   VersionInboundServicesEnum = "INBOUND_SERVICE_XMPP_SUBSCRIBE"
	VersionInboundServicesEnumInboundServiceXMPPPresence    VersionInboundServicesEnum = "INBOUND_SERVICE_XMPP_PRESENCE"
	VersionInboundServicesEnumInboundServiceChannelPresence VersionInboundServicesEnum = "INBOUND_SERVICE_CHANNEL_PRESENCE"
	VersionInboundServicesEnumInboundServiceWarmup          VersionInboundServicesEnum = "INBOUND_SERVICE_WARMUP"
)

type VersionServingStatusEnum string

const (
	VersionServingStatusEnumServingStatusUnspecified VersionServingStatusEnum = "SERVING_STATUS_UNSPECIFIED"
	VersionServingStatusEnumServing                  VersionServingStatusEnum = "SERVING"
	VersionServingStatusEnumStopped                  VersionServingStatusEnum = "STOPPED"
)

type Version struct {
	APIConfig                 *APIConfigHandler            `json:"apiConfig"`
	AppEngineApis             *bool                        `json:"appEngineApis"`
	AutomaticScaling          *AutomaticScaling            `json:"automaticScaling"`
	BasicScaling              *BasicScaling                `json:"basicScaling"`
	BetaSettings              map[string]string            `json:"betaSettings"`
	BuildEnvVariables         map[string]string            `json:"buildEnvVariables"`
	CreateTime                *string                      `json:"createTime"`
	CreatedBy                 *string                      `json:"createdBy"`
	DefaultExpiration         *string                      `json:"defaultExpiration"`
	Deployment                *Deployment                  `json:"deployment"`
	DiskUsageBytes            *string                      `json:"diskUsageBytes"`
	EndpointsAPIService       *EndpointsAPIService         `json:"endpointsApiService"`
	Entrypoint                *Entrypoint                  `json:"entrypoint"`
	Env                       *string                      `json:"env"`
	EnvVariables              map[string]string            `json:"envVariables"`
	ErrorHandlers             []ErrorHandler               `json:"errorHandlers"`
	Handlers                  []URLMap                     `json:"handlers"`
	HealthCheck               *HealthCheck                 `json:"healthCheck"`
	ID                        *string                      `json:"id"`
	InboundServices           []VersionInboundServicesEnum `json:"inboundServices"`
	InstanceClass             *string                      `json:"instanceClass"`
	Libraries                 []Library                    `json:"libraries"`
	LivenessCheck             *LivenessCheck               `json:"livenessCheck"`
	ManualScaling             *ManualScaling               `json:"manualScaling"`
	Name                      *string                      `json:"name"`
	Network                   *Network                     `json:"network"`
	NobuildFilesRegex         *string                      `json:"nobuildFilesRegex"`
	ReadinessCheck            *ReadinessCheck              `json:"readinessCheck"`
	Resources                 *Resources                   `json:"resources"`
	Runtime                   *string                      `json:"runtime"`
	RuntimeAPIVersion         *string                      `json:"runtimeApiVersion"`
	RuntimeChannel            *string                      `json:"runtimeChannel"`
	RuntimeMainExecutablePath *string                      `json:"runtimeMainExecutablePath"`
	ServiceAccount            *string                      `json:"serviceAccount"`
	ServingStatus             *VersionServingStatusEnum    `json:"servingStatus"`
	Threadsafe                *bool                        `json:"threadsafe"`
	VersionURL                *string                      `json:"versionUrl"`
	VM                        *bool                        `json:"vm"`
	VpcAccessConnector        *VpcAccessConnector          `json:"vpcAccessConnector"`
	Zones                     []string                     `json:"zones"`
}
