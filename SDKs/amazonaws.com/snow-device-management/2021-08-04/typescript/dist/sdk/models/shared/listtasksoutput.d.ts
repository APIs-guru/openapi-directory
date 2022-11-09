import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskSummary } from "./tasksummary";
export declare class ListTasksOutput extends SpeakeasyBase {
    nextToken?: string;
    tasks?: TaskSummary[];
}
