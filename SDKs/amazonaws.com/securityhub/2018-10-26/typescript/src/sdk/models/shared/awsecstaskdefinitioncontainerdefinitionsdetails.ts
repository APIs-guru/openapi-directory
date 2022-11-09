import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Command" })
  command?: string[];

  @Metadata({ data: "json, name=Cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=DependsOn", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails })
  dependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];

  @Metadata({ data: "json, name=DisableNetworking" })
  disableNetworking?: boolean;

  @Metadata({ data: "json, name=DnsSearchDomains" })
  dnsSearchDomains?: string[];

  @Metadata({ data: "json, name=DnsServers" })
  dnsServers?: string[];

  @Metadata({ data: "json, name=DockerLabels" })
  dockerLabels?: Map<string, string>;

  @Metadata({ data: "json, name=DockerSecurityOptions" })
  dockerSecurityOptions?: string[];

  @Metadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @Metadata({ data: "json, name=Environment", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails })
  environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];

  @Metadata({ data: "json, name=EnvironmentFiles", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails })
  environmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];

  @Metadata({ data: "json, name=Essential" })
  essential?: boolean;

  @Metadata({ data: "json, name=ExtraHosts", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails })
  extraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];

  @Metadata({ data: "json, name=FirelensConfiguration" })
  firelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;

  @Metadata({ data: "json, name=HealthCheck" })
  healthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;

  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=Image" })
  image?: string;

  @Metadata({ data: "json, name=Interactive" })
  interactive?: boolean;

  @Metadata({ data: "json, name=Links" })
  links?: string[];

  @Metadata({ data: "json, name=LinuxParameters" })
  linuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;

  @Metadata({ data: "json, name=LogConfiguration" })
  logConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;

  @Metadata({ data: "json, name=Memory" })
  memory?: number;

  @Metadata({ data: "json, name=MemoryReservation" })
  memoryReservation?: number;

  @Metadata({ data: "json, name=MountPoints", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails })
  mountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PortMappings", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails })
  portMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];

  @Metadata({ data: "json, name=Privileged" })
  privileged?: boolean;

  @Metadata({ data: "json, name=PseudoTerminal" })
  pseudoTerminal?: boolean;

  @Metadata({ data: "json, name=ReadonlyRootFilesystem" })
  readonlyRootFilesystem?: boolean;

  @Metadata({ data: "json, name=RepositoryCredentials" })
  repositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;

  @Metadata({ data: "json, name=ResourceRequirements", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails })
  resourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];

  @Metadata({ data: "json, name=Secrets", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails })
  secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];

  @Metadata({ data: "json, name=StartTimeout" })
  startTimeout?: number;

  @Metadata({ data: "json, name=StopTimeout" })
  stopTimeout?: number;

  @Metadata({ data: "json, name=SystemControls", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails })
  systemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];

  @Metadata({ data: "json, name=Ulimits", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails })
  ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];

  @Metadata({ data: "json, name=User" })
  user?: string;

  @Metadata({ data: "json, name=VolumesFrom", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails })
  volumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];

  @Metadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}
