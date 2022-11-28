import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentCommand } from "./deploymentcommand";



// Deployment
/** 
 * Describes a deployment of a stack or app.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: DeploymentCommand;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedAt" })
  completedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
