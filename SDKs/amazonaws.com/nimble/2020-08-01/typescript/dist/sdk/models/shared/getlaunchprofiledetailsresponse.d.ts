import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";
import { StreamingImage } from "./streamingimage";
import { StudioComponentSummary } from "./studiocomponentsummary";
export declare class GetLaunchProfileDetailsResponse extends SpeakeasyBase {
    launchProfile?: LaunchProfile;
    streamingImages?: StreamingImage[];
    studioComponentSummaries?: StudioComponentSummary[];
}
