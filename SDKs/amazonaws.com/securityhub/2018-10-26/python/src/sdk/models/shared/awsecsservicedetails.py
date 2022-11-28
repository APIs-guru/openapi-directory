from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsServiceDetails:
    r"""AwsEcsServiceDetails
    Provides details about a service within an ECS cluster.
    """
    
    capacity_provider_strategy: Optional[List[AwsEcsServiceCapacityProviderStrategyDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviderStrategy') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cluster') }})
    deployment_configuration: Optional[AwsEcsServiceDeploymentConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentConfiguration') }})
    deployment_controller: Optional[AwsEcsServiceDeploymentControllerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentController') }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredCount') }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableEcsManagedTags') }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableExecuteCommand') }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckGracePeriodSeconds') }})
    launch_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchType') }})
    load_balancers: Optional[List[AwsEcsServiceLoadBalancersDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    network_configuration: Optional[AwsEcsServiceNetworkConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkConfiguration') }})
    placement_constraints: Optional[List[AwsEcsServicePlacementConstraintsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    placement_strategies: Optional[List[AwsEcsServicePlacementStrategiesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementStrategies') }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformVersion') }})
    propagate_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropagateTags') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    scheduling_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchedulingStrategy') }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceArn') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    service_registries: Optional[List[AwsEcsServiceServiceRegistriesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRegistries') }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskDefinition') }})
    
