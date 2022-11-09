import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// ServiceInstanceSummary
/** 
 * A summary of the service instance detail data.
**/
export class ServiceInstanceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=deploymentStatus" })
  deploymentStatus: DeploymentStatusEnum;

  @Metadata({ data: "json, name=deploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @Metadata({ data: "json, name=environmentName" })
  environmentName: string;

  @Metadata({ data: "json, name=lastDeploymentAttemptedAt" })
  lastDeploymentAttemptedAt: Date;

  @Metadata({ data: "json, name=lastDeploymentSucceededAt" })
  lastDeploymentSucceededAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @Metadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
