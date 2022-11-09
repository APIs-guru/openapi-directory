import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";

export enum TagResponseColorEnum {
    DarkPink = "dark-pink"
,    DarkGreen = "dark-green"
,    DarkBlue = "dark-blue"
,    DarkRed = "dark-red"
,    DarkTeal = "dark-teal"
,    DarkBrown = "dark-brown"
,    DarkOrange = "dark-orange"
,    DarkPurple = "dark-purple"
,    DarkWarmGray = "dark-warm-gray"
,    LightPink = "light-pink"
,    LightGreen = "light-green"
,    LightBlue = "light-blue"
,    LightRed = "light-red"
,    LightTeal = "light-teal"
,    LightBrown = "light-brown"
,    LightOrange = "light-orange"
,    LightPurple = "light-purple"
,    LightWarmGray = "light-warm-gray"
}


export class TagResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: TagResponseColorEnum;

  @Metadata({ data: "json, name=followers", elemType: shared.UserCompact })
  followers?: UserCompact[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
