import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails } from "./awsecstaskdefinitioncontainerdefinitionsdependsondetails";
import { AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails } from "./awsecstaskdefinitioncontainerdefinitionsenvironmentdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails } from "./awsecstaskdefinitioncontainerdefinitionsenvironmentfilesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails } from "./awsecstaskdefinitioncontainerdefinitionsextrahostsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails } from "./awsecstaskdefinitioncontainerdefinitionsfirelensconfigurationdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails } from "./awsecstaskdefinitioncontainerdefinitionshealthcheckdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparametersdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails } from "./awsecstaskdefinitioncontainerdefinitionslogconfigurationdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails } from "./awsecstaskdefinitioncontainerdefinitionsmountpointsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails } from "./awsecstaskdefinitioncontainerdefinitionsportmappingsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails } from "./awsecstaskdefinitioncontainerdefinitionsrepositorycredentialsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails } from "./awsecstaskdefinitioncontainerdefinitionsresourcerequirementsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails } from "./awsecstaskdefinitioncontainerdefinitionssecretsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails } from "./awsecstaskdefinitioncontainerdefinitionssystemcontrolsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails } from "./awsecstaskdefinitioncontainerdefinitionsulimitsdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails } from "./awsecstaskdefinitioncontainerdefinitionsvolumesfromdetails";



// AwsEcsTaskDefinitionContainerDefinitionsDetails
/** 
 * A container definition that describes a container in the task.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=Cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=DependsOn", elemType: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails })
  dependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];

  @SpeakeasyMetadata({ data: "json, name=DisableNetworking" })
  disableNetworking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DnsSearchDomains" })
  dnsSearchDomains?: string[];

  @SpeakeasyMetadata({ data: "json, name=DnsServers" })
  dnsServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=DockerLabels" })
  dockerLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=DockerSecurityOptions" })
  dockerSecurityOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=Environment", elemType: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails })
  environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];

  @SpeakeasyMetadata({ data: "json, name=EnvironmentFiles", elemType: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails })
  environmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];

  @SpeakeasyMetadata({ data: "json, name=Essential" })
  essential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExtraHosts", elemType: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails })
  extraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];

  @SpeakeasyMetadata({ data: "json, name=FirelensConfiguration" })
  firelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=HealthCheck" })
  healthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;

  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=Interactive" })
  interactive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: string[];

  @SpeakeasyMetadata({ data: "json, name=LinuxParameters" })
  linuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;

  @SpeakeasyMetadata({ data: "json, name=LogConfiguration" })
  logConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=Memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=MemoryReservation" })
  memoryReservation?: number;

  @SpeakeasyMetadata({ data: "json, name=MountPoints", elemType: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails })
  mountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PortMappings", elemType: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails })
  portMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Privileged" })
  privileged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PseudoTerminal" })
  pseudoTerminal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReadonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RepositoryCredentials" })
  repositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;

  @SpeakeasyMetadata({ data: "json, name=ResourceRequirements", elemType: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails })
  resourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Secrets", elemType: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails })
  secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];

  @SpeakeasyMetadata({ data: "json, name=StartTimeout" })
  startTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=StopTimeout" })
  stopTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=SystemControls", elemType: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails })
  systemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Ulimits", elemType: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails })
  ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumesFrom", elemType: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails })
  volumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];

  @SpeakeasyMetadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}
