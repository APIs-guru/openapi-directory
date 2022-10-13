package shared

type AwsEcsTaskDefinitionContainerDefinitionsDetails struct {
	Command                []string                                                              `json:"Command"`
	CPU                    *int64                                                                `json:"Cpu"`
	DependsOn              []AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails            `json:"DependsOn"`
	DisableNetworking      *bool                                                                 `json:"DisableNetworking"`
	DNSSearchDomains       []string                                                              `json:"DnsSearchDomains"`
	DNSServers             []string                                                              `json:"DnsServers"`
	DockerLabels           map[string]string                                                     `json:"DockerLabels"`
	DockerSecurityOptions  []string                                                              `json:"DockerSecurityOptions"`
	EntryPoint             []string                                                              `json:"EntryPoint"`
	Environment            []AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails          `json:"Environment"`
	EnvironmentFiles       []AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails     `json:"EnvironmentFiles"`
	Essential              *bool                                                                 `json:"Essential"`
	ExtraHosts             []AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails           `json:"ExtraHosts"`
	FirelensConfiguration  *AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails `json:"FirelensConfiguration"`
	HealthCheck            *AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails           `json:"HealthCheck"`
	Hostname               *string                                                               `json:"Hostname"`
	Image                  *string                                                               `json:"Image"`
	Interactive            *bool                                                                 `json:"Interactive"`
	Links                  []string                                                              `json:"Links"`
	LinuxParameters        *AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails       `json:"LinuxParameters"`
	LogConfiguration       *AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails      `json:"LogConfiguration"`
	Memory                 *int64                                                                `json:"Memory"`
	MemoryReservation      *int64                                                                `json:"MemoryReservation"`
	MountPoints            []AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails          `json:"MountPoints"`
	Name                   *string                                                               `json:"Name"`
	PortMappings           []AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails         `json:"PortMappings"`
	Privileged             *bool                                                                 `json:"Privileged"`
	PseudoTerminal         *bool                                                                 `json:"PseudoTerminal"`
	ReadonlyRootFilesystem *bool                                                                 `json:"ReadonlyRootFilesystem"`
	RepositoryCredentials  *AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails `json:"RepositoryCredentials"`
	ResourceRequirements   []AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails `json:"ResourceRequirements"`
	Secrets                []AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails              `json:"Secrets"`
	StartTimeout           *int64                                                                `json:"StartTimeout"`
	StopTimeout            *int64                                                                `json:"StopTimeout"`
	SystemControls         []AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails       `json:"SystemControls"`
	Ulimits                []AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails              `json:"Ulimits"`
	User                   *string                                                               `json:"User"`
	VolumesFrom            []AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails          `json:"VolumesFrom"`
	WorkingDirectory       *string                                                               `json:"WorkingDirectory"`
}
