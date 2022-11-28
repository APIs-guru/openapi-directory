import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



// ServiceInstance
/** 
 * The service instance detail data.
**/
export class ServiceInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatus" })
  deploymentStatus: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=deploymentStatusMessage" })
  deploymentStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentAttemptedAt" })
  lastDeploymentAttemptedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentSucceededAt" })
  lastDeploymentSucceededAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: string;

  @SpeakeasyMetadata({ data: "json, name=templateMajorVersion" })
  templateMajorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateMinorVersion" })
  templateMinorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
