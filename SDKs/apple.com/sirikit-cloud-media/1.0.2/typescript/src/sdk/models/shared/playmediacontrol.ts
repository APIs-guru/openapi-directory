import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayMediaControlActivity } from "./playmediacontrolactivity";
import { PlayMediaControlCommandSet } from "./playmediacontrolcommandset";
import { PlayMediaControlSchemeEnum } from "./playmediacontrolschemeenum";


export class PlayMediaControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity" })
  activity?: PlayMediaControlActivity;

  @Metadata({ data: "json, name=commands" })
  commands?: PlayMediaControlCommandSet;

  @Metadata({ data: "json, name=scheme" })
  scheme: PlayMediaControlSchemeEnum;
}
