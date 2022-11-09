import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";
import { PlayerContext } from "./playercontext";
import { QueueActivityReportEventEnum } from "./queueactivityreporteventenum";
import { UserActivity } from "./useractivity";


export class UpdateActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints" })
  constraints?: Constraints;

  @Metadata({ data: "json, name=nowPlaying" })
  nowPlaying?: PlayerContext;

  @Metadata({ data: "json, name=previouslyPlaying" })
  previouslyPlaying?: PlayerContext;

  @Metadata({ data: "json, name=report" })
  report: QueueActivityReportEventEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=userActivity" })
  userActivity: UserActivity;

  @Metadata({ data: "json, name=version" })
  version: string;
}
