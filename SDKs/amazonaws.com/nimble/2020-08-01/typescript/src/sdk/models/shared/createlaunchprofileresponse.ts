import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";



export class CreateLaunchProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;
}
