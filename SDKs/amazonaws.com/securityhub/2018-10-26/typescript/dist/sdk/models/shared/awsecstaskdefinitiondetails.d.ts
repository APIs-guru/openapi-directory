import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsDetails } from "./awsecstaskdefinitioncontainerdefinitionsdetails";
import { AwsEcsTaskDefinitionInferenceAcceleratorsDetails } from "./awsecstaskdefinitioninferenceacceleratorsdetails";
import { AwsEcsTaskDefinitionPlacementConstraintsDetails } from "./awsecstaskdefinitionplacementconstraintsdetails";
import { AwsEcsTaskDefinitionProxyConfigurationDetails } from "./awsecstaskdefinitionproxyconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesDetails } from "./awsecstaskdefinitionvolumesdetails";
/**
 * details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
**/
export declare class AwsEcsTaskDefinitionDetails extends SpeakeasyBase {
    containerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];
    cpu?: string;
    executionRoleArn?: string;
    family?: string;
    inferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];
    ipcMode?: string;
    memory?: string;
    networkMode?: string;
    pidMode?: string;
    placementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];
    proxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;
    requiresCompatibilities?: string[];
    taskRoleArn?: string;
    volumes?: AwsEcsTaskDefinitionVolumesDetails[];
}
