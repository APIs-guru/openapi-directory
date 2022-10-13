from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecsservicecapacityproviderstrategydetails
from . import awsecsservicedeploymentconfigurationdetails
from . import awsecsservicedeploymentcontrollerdetails
from . import awsecsserviceloadbalancersdetails
from . import awsecsservicenetworkconfigurationdetails
from . import awsecsserviceplacementconstraintsdetails
from . import awsecsserviceplacementstrategiesdetails
from . import awsecsserviceserviceregistriesdetails


@dataclass_json
@dataclass
class AwsEcsServiceDetails:
    capacity_provider_strategy: Optional[List[awsecsservicecapacityproviderstrategydetails.AwsEcsServiceCapacityProviderStrategyDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityProviderStrategy' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cluster' }})
    deployment_configuration: Optional[awsecsservicedeploymentconfigurationdetails.AwsEcsServiceDeploymentConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentConfiguration' }})
    deployment_controller: Optional[awsecsservicedeploymentcontrollerdetails.AwsEcsServiceDeploymentControllerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentController' }})
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredCount' }})
    enable_ecs_managed_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableEcsManagedTags' }})
    enable_execute_command: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableExecuteCommand' }})
    health_check_grace_period_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckGracePeriodSeconds' }})
    launch_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchType' }})
    load_balancers: Optional[List[awsecsserviceloadbalancersdetails.AwsEcsServiceLoadBalancersDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    network_configuration: Optional[awsecsservicenetworkconfigurationdetails.AwsEcsServiceNetworkConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkConfiguration' }})
    placement_constraints: Optional[List[awsecsserviceplacementconstraintsdetails.AwsEcsServicePlacementConstraintsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementConstraints' }})
    placement_strategies: Optional[List[awsecsserviceplacementstrategiesdetails.AwsEcsServicePlacementStrategiesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementStrategies' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformVersion' }})
    propagate_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PropagateTags' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    scheduling_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchedulingStrategy' }})
    service_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceArn' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    service_registries: Optional[List[awsecsserviceserviceregistriesdetails.AwsEcsServiceServiceRegistriesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRegistries' }})
    task_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskDefinition' }})
    
