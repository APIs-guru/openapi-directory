import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// DeploymentJob
/** 
 * Information about a deployment job.
**/
export class DeploymentJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=deploymentApplicationConfigs", elemType: shared.DeploymentApplicationConfig })
  deploymentApplicationConfigs?: DeploymentApplicationConfig[];

  @Metadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @Metadata({ data: "json, name=failureCode" })
  failureCode?: DeploymentJobErrorCodeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=fleet" })
  fleet?: string;

  @Metadata({ data: "json, name=status" })
  status?: DeploymentStatusEnum;
}
