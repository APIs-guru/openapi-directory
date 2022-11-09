import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentCommand } from "./deploymentcommand";


// Deployment
/** 
 * Describes a deployment of a stack or app.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=Command" })
  command?: DeploymentCommand;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CompletedAt" })
  completedAt?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=CustomJson" })
  customJson?: string;

  @Metadata({ data: "json, name=DeploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
