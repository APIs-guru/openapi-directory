import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FireteamFireteamMember } from "./fireteamfireteammember";
import { FireteamFireteamSummary } from "./fireteamfireteamsummary";



export class FireteamFireteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FireteamFireteamMember })
  alternates?: FireteamFireteamMember[];

  @SpeakeasyMetadata({ elemType: FireteamFireteamMember })
  members?: FireteamFireteamMember[];

  @SpeakeasyMetadata()
  summary?: FireteamFireteamSummary;
}
