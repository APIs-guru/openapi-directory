import { SpeakeasyBase } from "../../../internal/utils";
import { TaskList } from "./tasklist";
export declare class PollForActivityTaskInput extends SpeakeasyBase {
    domain: string;
    identity?: string;
    taskList: TaskList;
}
