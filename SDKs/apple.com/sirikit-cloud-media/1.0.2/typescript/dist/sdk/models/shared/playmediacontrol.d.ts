import { SpeakeasyBase } from "../../../internal/utils";
import { PlayMediaControlActivity } from "./playmediacontrolactivity";
import { PlayMediaControlCommandSet } from "./playmediacontrolcommandset";
import { PlayMediaControlSchemeEnum } from "./playmediacontrolschemeenum";
export declare class PlayMediaControl extends SpeakeasyBase {
    activity?: PlayMediaControlActivity;
    commands?: PlayMediaControlCommandSet;
    scheme: PlayMediaControlSchemeEnum;
}
