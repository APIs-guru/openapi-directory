import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfile } from "./launchprofile";


export class GetLaunchProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;
}
