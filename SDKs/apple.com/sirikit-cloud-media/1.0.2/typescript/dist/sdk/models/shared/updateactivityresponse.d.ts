import { SpeakeasyBase } from "../../../internal/utils";
import { Queue } from "./queue";
import { UserActivity } from "./useractivity";
export declare class UpdateActivityResponse extends SpeakeasyBase {
    queue?: Queue;
    userActivity?: UserActivity;
}
