import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";
import { QueueActivityReportEventEnum } from "./queueactivityreporteventenum";
import { UserActivity } from "./useractivity";



export class UpdateActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints" })
  constraints?: Constraints;

  @SpeakeasyMetadata({ data: "json, name=nowPlaying" })
  nowPlaying?: PlayerContext;

  @SpeakeasyMetadata({ data: "json, name=previouslyPlaying" })
  previouslyPlaying?: PlayerContext;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report: QueueActivityReportEventEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=userActivity" })
  userActivity: UserActivity;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
