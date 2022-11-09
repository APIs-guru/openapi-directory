import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchProfile } from "./launchprofile";
import { StreamingImage } from "./streamingimage";
import { StudioComponentSummary } from "./studiocomponentsummary";


export class GetLaunchProfileDetailsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchProfile" })
  launchProfile?: LaunchProfile;

  @Metadata({ data: "json, name=streamingImages", elemType: shared.StreamingImage })
  streamingImages?: StreamingImage[];

  @Metadata({ data: "json, name=studioComponentSummaries", elemType: shared.StudioComponentSummary })
  studioComponentSummaries?: StudioComponentSummary[];
}
