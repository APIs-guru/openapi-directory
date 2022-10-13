from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitioncontainerdefinitionsdependsondetails
from . import awsecstaskdefinitioncontainerdefinitionsenvironmentdetails
from . import awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails
from . import awsecstaskdefinitioncontainerdefinitionsextrahostsdetails
from . import awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails
from . import awsecstaskdefinitioncontainerdefinitionshealthcheckdetails
from . import awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails
from . import awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails
from . import awsecstaskdefinitioncontainerdefinitionsmountpointsdetails
from . import awsecstaskdefinitioncontainerdefinitionsportmappingsdetails
from . import awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails
from . import awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails
from . import awsecstaskdefinitioncontainerdefinitionssecretsdetails
from . import awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails
from . import awsecstaskdefinitioncontainerdefinitionsulimitsdetails
from . import awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsDetails:
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cpu' }})
    depends_on: Optional[List[awsecstaskdefinitioncontainerdefinitionsdependsondetails.AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DependsOn' }})
    disable_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableNetworking' }})
    dns_search_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsSearchDomains' }})
    dns_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DnsServers' }})
    docker_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DockerLabels' }})
    docker_security_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DockerSecurityOptions' }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntryPoint' }})
    environment: Optional[List[awsecstaskdefinitioncontainerdefinitionsenvironmentdetails.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    environment_files: Optional[List[awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnvironmentFiles' }})
    essential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Essential' }})
    extra_hosts: Optional[List[awsecstaskdefinitioncontainerdefinitionsextrahostsdetails.AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExtraHosts' }})
    firelens_configuration: Optional[awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails.AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirelensConfiguration' }})
    health_check: Optional[awsecstaskdefinitioncontainerdefinitionshealthcheckdetails.AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheck' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hostname' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Interactive' }})
    links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    linux_parameters: Optional[awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinuxParameters' }})
    log_configuration: Optional[awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails.AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogConfiguration' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Memory' }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemoryReservation' }})
    mount_points: Optional[List[awsecstaskdefinitioncontainerdefinitionsmountpointsdetails.AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountPoints' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    port_mappings: Optional[List[awsecstaskdefinitioncontainerdefinitionsportmappingsdetails.AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PortMappings' }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Privileged' }})
    pseudo_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PseudoTerminal' }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadonlyRootFilesystem' }})
    repository_credentials: Optional[awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails.AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryCredentials' }})
    resource_requirements: Optional[List[awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails.AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRequirements' }})
    secrets: Optional[List[awsecstaskdefinitioncontainerdefinitionssecretsdetails.AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Secrets' }})
    start_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeout' }})
    stop_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopTimeout' }})
    system_controls: Optional[List[awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails.AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SystemControls' }})
    ulimits: Optional[List[awsecstaskdefinitioncontainerdefinitionsulimitsdetails.AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ulimits' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    volumes_from: Optional[List[awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails.AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumesFrom' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkingDirectory' }})
    
