import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";


export class GetLaunchProfileMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: LaunchProfileMembership;
}
