import { SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";
import { QueueActivityReportEventEnum } from "./queueactivityreporteventenum";
import { UserActivity } from "./useractivity";
export declare class UpdateActivityRequest extends SpeakeasyBase {
    constraints?: Constraints;
    nowPlaying?: PlayerContext;
    previouslyPlaying?: PlayerContext;
    report: QueueActivityReportEventEnum;
    timestamp: Date;
    userActivity: UserActivity;
    version: string;
}
