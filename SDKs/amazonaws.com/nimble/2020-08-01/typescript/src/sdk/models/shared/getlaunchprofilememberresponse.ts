import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";



export class GetLaunchProfileMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: LaunchProfileMembership;
}
