import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileMembership } from "./launchprofilemembership";



export class ListLaunchProfileMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: LaunchProfileMembership })
  members?: LaunchProfileMembership[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
