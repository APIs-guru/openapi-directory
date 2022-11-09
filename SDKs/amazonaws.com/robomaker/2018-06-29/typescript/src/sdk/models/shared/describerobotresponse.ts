import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";


export class DescribeRobotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=greengrassGroupId" })
  greengrassGroupId?: string;

  @Metadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @Metadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: RobotStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
