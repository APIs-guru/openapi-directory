import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { Robot } from "./robot";



export class DescribeFleetResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=robots", elemType: Robot })
  robots?: Robot[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
