from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsDetails
    A container definition that describes a container in the task.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cpu') }})
    depends_on: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DependsOn') }})
    disable_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableNetworking') }})
    dns_search_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsSearchDomains') }})
    dns_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsServers') }})
    docker_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerLabels') }})
    docker_security_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerSecurityOptions') }})
    entry_point: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    environment: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Environment') }})
    environment_files: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnvironmentFiles') }})
    essential: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Essential') }})
    extra_hosts: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtraHosts') }})
    firelens_configuration: Optional[AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirelensConfiguration') }})
    health_check: Optional[AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interactive') }})
    links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    linux_parameters: Optional[AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LinuxParameters') }})
    log_configuration: Optional[AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogConfiguration') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Memory') }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemoryReservation') }})
    mount_points: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPoints') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    port_mappings: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortMappings') }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Privileged') }})
    pseudo_terminal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PseudoTerminal') }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadonlyRootFilesystem') }})
    repository_credentials: Optional[AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryCredentials') }})
    resource_requirements: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRequirements') }})
    secrets: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Secrets') }})
    start_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeout') }})
    stop_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopTimeout') }})
    system_controls: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemControls') }})
    ulimits: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ulimits') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    volumes_from: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumesFrom') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDirectory') }})
    
