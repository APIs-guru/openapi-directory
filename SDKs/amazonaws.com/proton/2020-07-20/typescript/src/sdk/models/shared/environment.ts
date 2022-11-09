import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";


// Environment
/** 
 * The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus: DeploymentStatusEnum;

  @Metadata({ data: "json, name=deploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentAccountConnectionId" })
  environmentAccountConnectionId?: string;

  @Metadata({ data: "json, name=environmentAccountId" })
  environmentAccountId?: string;

  @Metadata({ data: "json, name=lastDeploymentAttemptedAt" })
  lastDeploymentAttemptedAt: Date;

  @Metadata({ data: "json, name=lastDeploymentSucceededAt" })
  lastDeploymentSucceededAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=protonServiceRoleArn" })
  protonServiceRoleArn?: string;

  @Metadata({ data: "json, name=provisioning" })
  provisioning?: ProvisioningEnum;

  @Metadata({ data: "json, name=spec" })
  spec?: string;

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
