import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchProfile } from "./launchprofile";


export class ListLaunchProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=launchProfiles", elemType: shared.LaunchProfile })
  launchProfiles?: LaunchProfile[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
