import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";



export class DeleteLaunchProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;
}
