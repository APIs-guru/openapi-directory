import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";



export class DescribeRobotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RobotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
