import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
import { WorkspaceCompactInput } from "./workspacecompact";


export enum TagResponseColorEnum {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray"
}


export class TagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: TagResponseColorEnum;

  @SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact })
  followers?: UserCompact[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}


export class TagResponseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: TagResponseColorEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompactInput;
}
