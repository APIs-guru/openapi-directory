package shared

type AwsEcsTaskDefinitionContainerDefinitionsDetails struct {
	Command                []string                                                              `json:"Command,omitempty"`
	CPU                    *int64                                                                `json:"Cpu,omitempty"`
	DependsOn              []AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails            `json:"DependsOn,omitempty"`
	DisableNetworking      *bool                                                                 `json:"DisableNetworking,omitempty"`
	DNSSearchDomains       []string                                                              `json:"DnsSearchDomains,omitempty"`
	DNSServers             []string                                                              `json:"DnsServers,omitempty"`
	DockerLabels           map[string]string                                                     `json:"DockerLabels,omitempty"`
	DockerSecurityOptions  []string                                                              `json:"DockerSecurityOptions,omitempty"`
	EntryPoint             []string                                                              `json:"EntryPoint,omitempty"`
	Environment            []AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails          `json:"Environment,omitempty"`
	EnvironmentFiles       []AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails     `json:"EnvironmentFiles,omitempty"`
	Essential              *bool                                                                 `json:"Essential,omitempty"`
	ExtraHosts             []AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails           `json:"ExtraHosts,omitempty"`
	FirelensConfiguration  *AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails `json:"FirelensConfiguration,omitempty"`
	HealthCheck            *AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails           `json:"HealthCheck,omitempty"`
	Hostname               *string                                                               `json:"Hostname,omitempty"`
	Image                  *string                                                               `json:"Image,omitempty"`
	Interactive            *bool                                                                 `json:"Interactive,omitempty"`
	Links                  []string                                                              `json:"Links,omitempty"`
	LinuxParameters        *AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails       `json:"LinuxParameters,omitempty"`
	LogConfiguration       *AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails      `json:"LogConfiguration,omitempty"`
	Memory                 *int64                                                                `json:"Memory,omitempty"`
	MemoryReservation      *int64                                                                `json:"MemoryReservation,omitempty"`
	MountPoints            []AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails          `json:"MountPoints,omitempty"`
	Name                   *string                                                               `json:"Name,omitempty"`
	PortMappings           []AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails         `json:"PortMappings,omitempty"`
	Privileged             *bool                                                                 `json:"Privileged,omitempty"`
	PseudoTerminal         *bool                                                                 `json:"PseudoTerminal,omitempty"`
	ReadonlyRootFilesystem *bool                                                                 `json:"ReadonlyRootFilesystem,omitempty"`
	RepositoryCredentials  *AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails `json:"RepositoryCredentials,omitempty"`
	ResourceRequirements   []AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails `json:"ResourceRequirements,omitempty"`
	Secrets                []AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails              `json:"Secrets,omitempty"`
	StartTimeout           *int64                                                                `json:"StartTimeout,omitempty"`
	StopTimeout            *int64                                                                `json:"StopTimeout,omitempty"`
	SystemControls         []AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails       `json:"SystemControls,omitempty"`
	Ulimits                []AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails              `json:"Ulimits,omitempty"`
	User                   *string                                                               `json:"User,omitempty"`
	VolumesFrom            []AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails          `json:"VolumesFrom,omitempty"`
	WorkingDirectory       *string                                                               `json:"WorkingDirectory,omitempty"`
}
