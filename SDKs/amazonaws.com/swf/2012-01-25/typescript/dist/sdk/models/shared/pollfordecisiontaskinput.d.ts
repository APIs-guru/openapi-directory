import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
export declare class PollForDecisionTaskInput extends SpeakeasyBase {
    domain: string;
    identity?: string;
    maximumPageSize?: number;
    nextPageToken?: string;
    reverseOrder?: boolean;
    taskList: TaskList;
}
