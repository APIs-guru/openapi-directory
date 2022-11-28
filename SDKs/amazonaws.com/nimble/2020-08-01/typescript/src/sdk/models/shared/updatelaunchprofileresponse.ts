import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";



export class UpdateLaunchProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;
}
