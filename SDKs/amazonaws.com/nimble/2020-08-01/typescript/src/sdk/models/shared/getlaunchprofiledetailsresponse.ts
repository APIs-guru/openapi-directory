import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";
import { StreamingImage } from "./streamingimage";
import { StudioComponentSummary } from "./studiocomponentsummary";



export class GetLaunchProfileDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;

  @SpeakeasyMetadata({ data: "json, name=streamingImages", elemType: StreamingImage })
  streamingImages?: StreamingImage[];

  @SpeakeasyMetadata({ data: "json, name=studioComponentSummaries", elemType: StudioComponentSummary })
  studioComponentSummaries?: StudioComponentSummary[];
}
