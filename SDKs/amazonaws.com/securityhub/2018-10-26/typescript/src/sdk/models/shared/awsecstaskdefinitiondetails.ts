import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ContainerDefinitions", elemType: AwsEcsTaskDefinitionContainerDefinitionsDetails })
  containerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Cpu" })
  cpu?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceAccelerators", elemType: AwsEcsTaskDefinitionInferenceAcceleratorsDetails })
  inferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];

  @SpeakeasyMetadata({ data: "json, name=IpcMode" })
  ipcMode?: string;

  @SpeakeasyMetadata({ data: "json, name=Memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkMode" })
  networkMode?: string;

  @SpeakeasyMetadata({ data: "json, name=PidMode" })
  pidMode?: string;

  @SpeakeasyMetadata({ data: "json, name=PlacementConstraints", elemType: AwsEcsTaskDefinitionPlacementConstraintsDetails })
  placementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];

  @SpeakeasyMetadata({ data: "json, name=ProxyConfiguration" })
  proxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=RequiresCompatibilities" })
  requiresCompatibilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=TaskRoleArn" })
  taskRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Volumes", elemType: AwsEcsTaskDefinitionVolumesDetails })
  volumes?: AwsEcsTaskDefinitionVolumesDetails[];
}
