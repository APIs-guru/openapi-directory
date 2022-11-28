import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayMediaControlActivity } from "./playmediacontrolactivity";
import { PlayMediaControlCommandSet } from "./playmediacontrolcommandset";
import { PlayMediaControlSchemeEnum } from "./playmediacontrolschemeenum";



export class PlayMediaControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity?: PlayMediaControlActivity;

  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: PlayMediaControlCommandSet;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme: PlayMediaControlSchemeEnum;
}
