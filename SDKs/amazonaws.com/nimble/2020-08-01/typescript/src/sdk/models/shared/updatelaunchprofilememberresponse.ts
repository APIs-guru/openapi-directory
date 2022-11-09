import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";


export class UpdateLaunchProfileMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: LaunchProfileMembership;
}
