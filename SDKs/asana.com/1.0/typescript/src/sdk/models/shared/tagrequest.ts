import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagRequestColorEnum {
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


export class TagRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: TagRequestColorEnum;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}
