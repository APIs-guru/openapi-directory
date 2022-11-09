import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";
/**
 * Information about a robot.
**/
export declare class Robot extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn?: string;
    createdAt?: Date;
    fleetArn?: string;
    greenGrassGroupId?: string;
    lastDeploymentJob?: string;
    lastDeploymentTime?: Date;
    name?: string;
    status?: RobotStatusEnum;
}
