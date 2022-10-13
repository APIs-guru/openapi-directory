package shared

type ContainerServiceStateDetailCodeEnum string

const (
	ContainerServiceStateDetailCodeEnumCreatingSystemResources       ContainerServiceStateDetailCodeEnum = "CREATING_SYSTEM_RESOURCES"
	ContainerServiceStateDetailCodeEnumCreatingNetworkInfrastructure ContainerServiceStateDetailCodeEnum = "CREATING_NETWORK_INFRASTRUCTURE"
	ContainerServiceStateDetailCodeEnumProvisioningCertificate       ContainerServiceStateDetailCodeEnum = "PROVISIONING_CERTIFICATE"
	ContainerServiceStateDetailCodeEnumProvisioningService           ContainerServiceStateDetailCodeEnum = "PROVISIONING_SERVICE"
	ContainerServiceStateDetailCodeEnumCreatingDeployment            ContainerServiceStateDetailCodeEnum = "CREATING_DEPLOYMENT"
	ContainerServiceStateDetailCodeEnumEvaluatingHealthCheck         ContainerServiceStateDetailCodeEnum = "EVALUATING_HEALTH_CHECK"
	ContainerServiceStateDetailCodeEnumActivatingDeployment          ContainerServiceStateDetailCodeEnum = "ACTIVATING_DEPLOYMENT"
	ContainerServiceStateDetailCodeEnumCertificateLimitExceeded      ContainerServiceStateDetailCodeEnum = "CERTIFICATE_LIMIT_EXCEEDED"
	ContainerServiceStateDetailCodeEnumUnknownError                  ContainerServiceStateDetailCodeEnum = "UNKNOWN_ERROR"
)
