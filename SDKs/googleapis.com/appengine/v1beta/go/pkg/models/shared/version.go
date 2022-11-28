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

// Version
// A Version resource is a specific set of source code and configuration files that are deployed into a service.
type Version struct {
	APIConfig                 *APIConfigHandler            `json:"apiConfig,omitempty"`
	AppEngineApis             *bool                        `json:"appEngineApis,omitempty"`
	AutomaticScaling          *AutomaticScaling            `json:"automaticScaling,omitempty"`
	BasicScaling              *BasicScaling                `json:"basicScaling,omitempty"`
	BetaSettings              map[string]string            `json:"betaSettings,omitempty"`
	BuildEnvVariables         map[string]string            `json:"buildEnvVariables,omitempty"`
	CreateTime                *string                      `json:"createTime,omitempty"`
	CreatedBy                 *string                      `json:"createdBy,omitempty"`
	DefaultExpiration         *string                      `json:"defaultExpiration,omitempty"`
	Deployment                *Deployment                  `json:"deployment,omitempty"`
	DiskUsageBytes            *string                      `json:"diskUsageBytes,omitempty"`
	EndpointsAPIService       *EndpointsAPIService         `json:"endpointsApiService,omitempty"`
	Entrypoint                *Entrypoint                  `json:"entrypoint,omitempty"`
	Env                       *string                      `json:"env,omitempty"`
	EnvVariables              map[string]string            `json:"envVariables,omitempty"`
	ErrorHandlers             []ErrorHandler               `json:"errorHandlers,omitempty"`
	Handlers                  []URLMap                     `json:"handlers,omitempty"`
	HealthCheck               *HealthCheck                 `json:"healthCheck,omitempty"`
	ID                        *string                      `json:"id,omitempty"`
	InboundServices           []VersionInboundServicesEnum `json:"inboundServices,omitempty"`
	InstanceClass             *string                      `json:"instanceClass,omitempty"`
	Libraries                 []Library                    `json:"libraries,omitempty"`
	LivenessCheck             *LivenessCheck               `json:"livenessCheck,omitempty"`
	ManualScaling             *ManualScaling               `json:"manualScaling,omitempty"`
	Name                      *string                      `json:"name,omitempty"`
	Network                   *Network                     `json:"network,omitempty"`
	NobuildFilesRegex         *string                      `json:"nobuildFilesRegex,omitempty"`
	ReadinessCheck            *ReadinessCheck              `json:"readinessCheck,omitempty"`
	Resources                 *Resources                   `json:"resources,omitempty"`
	Runtime                   *string                      `json:"runtime,omitempty"`
	RuntimeAPIVersion         *string                      `json:"runtimeApiVersion,omitempty"`
	RuntimeChannel            *string                      `json:"runtimeChannel,omitempty"`
	RuntimeMainExecutablePath *string                      `json:"runtimeMainExecutablePath,omitempty"`
	ServiceAccount            *string                      `json:"serviceAccount,omitempty"`
	ServingStatus             *VersionServingStatusEnum    `json:"servingStatus,omitempty"`
	Threadsafe                *bool                        `json:"threadsafe,omitempty"`
	VersionURL                *string                      `json:"versionUrl,omitempty"`
	VM                        *bool                        `json:"vm,omitempty"`
	VpcAccessConnector        *VpcAccessConnector          `json:"vpcAccessConnector,omitempty"`
	Zones                     []string                     `json:"zones,omitempty"`
}
