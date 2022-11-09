import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEcsTaskDefinitionContainerDefinitionsDetails } from "./awsecstaskdefinitioncontainerdefinitionsdetails";
import { AwsEcsTaskDefinitionInferenceAcceleratorsDetails } from "./awsecstaskdefinitioninferenceacceleratorsdetails";
import { AwsEcsTaskDefinitionPlacementConstraintsDetails } from "./awsecstaskdefinitionplacementconstraintsdetails";
import { AwsEcsTaskDefinitionProxyConfigurationDetails } from "./awsecstaskdefinitionproxyconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesDetails } from "./awsecstaskdefinitionvolumesdetails";


// AwsEcsTaskDefinitionDetails
/** 
 * details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
**/
export class AwsEcsTaskDefinitionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerDefinitions", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsDetails })
  containerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];

  @Metadata({ data: "json, name=Cpu" })
  cpu?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=Family" })
  family?: string;

  @Metadata({ data: "json, name=InferenceAccelerators", elemType: shared.AwsEcsTaskDefinitionInferenceAcceleratorsDetails })
  inferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];

  @Metadata({ data: "json, name=IpcMode" })
  ipcMode?: string;

  @Metadata({ data: "json, name=Memory" })
  memory?: string;

  @Metadata({ data: "json, name=NetworkMode" })
  networkMode?: string;

  @Metadata({ data: "json, name=PidMode" })
  pidMode?: string;

  @Metadata({ data: "json, name=PlacementConstraints", elemType: shared.AwsEcsTaskDefinitionPlacementConstraintsDetails })
  placementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];

  @Metadata({ data: "json, name=ProxyConfiguration" })
  proxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;

  @Metadata({ data: "json, name=RequiresCompatibilities" })
  requiresCompatibilities?: string[];

  @Metadata({ data: "json, name=TaskRoleArn" })
  taskRoleArn?: string;

  @Metadata({ data: "json, name=Volumes", elemType: shared.AwsEcsTaskDefinitionVolumesDetails })
  volumes?: AwsEcsTaskDefinitionVolumesDetails[];
}
