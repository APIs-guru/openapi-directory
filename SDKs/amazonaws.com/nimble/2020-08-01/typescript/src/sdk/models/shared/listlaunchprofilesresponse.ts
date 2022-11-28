import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfile } from "./launchprofile";



export class ListLaunchProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launchProfiles", elemType: LaunchProfile })
  launchProfiles?: LaunchProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
