import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";
export declare class ListLaunchProfilesResponse extends SpeakeasyBase {
    launchProfiles?: LaunchProfile[];
    nextToken?: string;
}
