import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { Robot } from "./robot";
export declare class DescribeFleetResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    lastDeploymentJob?: string;
    lastDeploymentStatus?: DeploymentStatusEnum;
    lastDeploymentTime?: Date;
    name?: string;
    robots?: Robot[];
    tags?: Map<string, string>;
}
