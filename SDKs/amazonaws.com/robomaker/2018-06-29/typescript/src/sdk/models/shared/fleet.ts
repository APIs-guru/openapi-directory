import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";



// Fleet
/** 
 * Information about a fleet.
**/
export class Fleet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentStatus" })
  lastDeploymentStatus?: DeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
