import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// ServicePipeline
/** 
 * The service pipeline detail data.
**/
export class ServicePipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus: DeploymentStatusEnum;

  @Metadata({ data: "json, name=deploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @Metadata({ data: "json, name=lastDeploymentAttemptedAt" })
  lastDeploymentAttemptedAt: Date;

  @Metadata({ data: "json, name=lastDeploymentSucceededAt" })
  lastDeploymentSucceededAt: Date;

  @Metadata({ data: "json, name=spec" })
  spec?: string;

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
