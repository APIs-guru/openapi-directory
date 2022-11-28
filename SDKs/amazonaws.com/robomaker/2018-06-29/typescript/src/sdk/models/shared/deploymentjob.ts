import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



// DeploymentJob
/** 
 * Information about a deployment job.
**/
export class DeploymentJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentApplicationConfigs", elemType: DeploymentApplicationConfig })
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @SpeakeasyMetadata({ data: "json, name=failureCode" })
  failureCode?: DeploymentJobErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=fleet" })
  fleet?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DeploymentStatusEnum;
}
