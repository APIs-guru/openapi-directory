import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LaunchProfileMembership } from "./launchprofilemembership";


export class ListLaunchProfileMembersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=members", elemType: shared.LaunchProfileMembership })
  members?: LaunchProfileMembership[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
