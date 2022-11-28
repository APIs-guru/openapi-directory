import { SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { UserActivity } from "./useractivity";
export declare class PlayMediaRequest extends SpeakeasyBase {
    constraints: Constraints;
    userActivity: UserActivity;
    version: string;
}
