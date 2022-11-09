import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";


// Fleet
/** 
 * Information about a fleet.
**/
export class Fleet extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @Metadata({ data: "json, name=lastDeploymentStatus" })
  lastDeploymentStatus?: DeploymentStatusEnum;

  @Metadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
