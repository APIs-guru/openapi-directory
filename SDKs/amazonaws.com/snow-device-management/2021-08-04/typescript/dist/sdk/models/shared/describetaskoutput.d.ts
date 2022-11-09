import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskStateEnum } from "./taskstateenum";
export declare class DescribeTaskOutput extends SpeakeasyBase {
    completedAt?: Date;
    createdAt?: Date;
    description?: string;
    lastUpdatedAt?: Date;
    state?: TaskStateEnum;
    tags?: Map<string, string>;
    targets?: string[];
    taskArn?: string;
    taskId?: string;
}
