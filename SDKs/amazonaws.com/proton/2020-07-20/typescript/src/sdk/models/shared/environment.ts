import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";



// Environment
/** 
 * The environment detail data. An AWS Proton environment is a set resources shared across an AWS Proton service.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatus" })
  deploymentStatus: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentAccountConnectionId" })
  environmentAccountConnectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentAccountId" })
  environmentAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentAttemptedAt" })
  lastDeploymentAttemptedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentSucceededAt" })
  lastDeploymentSucceededAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protonServiceRoleArn" })
  protonServiceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioning" })
  provisioning?: ProvisioningEnum;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: string;

  @SpeakeasyMetadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
