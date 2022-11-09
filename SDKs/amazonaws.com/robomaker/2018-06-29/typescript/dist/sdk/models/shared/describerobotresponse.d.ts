import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";
export declare class DescribeRobotResponse extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn?: string;
    createdAt?: Date;
    fleetArn?: string;
    greengrassGroupId?: string;
    lastDeploymentJob?: string;
    lastDeploymentTime?: Date;
    name?: string;
    status?: RobotStatusEnum;
    tags?: Map<string, string>;
}
