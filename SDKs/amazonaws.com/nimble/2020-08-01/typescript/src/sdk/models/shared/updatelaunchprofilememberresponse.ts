import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";



export class UpdateLaunchProfileMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: LaunchProfileMembership;
}
