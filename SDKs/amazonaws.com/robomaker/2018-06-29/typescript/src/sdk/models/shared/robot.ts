import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";


// Robot
/** 
 * Information about a robot.
**/
export class Robot extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: ArchitectureEnum;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=greenGrassGroupId" })
  greenGrassGroupId?: string;

  @Metadata({ data: "json, name=lastDeploymentJob" })
  lastDeploymentJob?: string;

  @Metadata({ data: "json, name=lastDeploymentTime" })
  lastDeploymentTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: RobotStatusEnum;
}
