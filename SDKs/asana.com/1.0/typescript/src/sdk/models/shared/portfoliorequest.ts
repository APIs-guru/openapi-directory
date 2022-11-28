import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PortfolioRequestColorEnum {
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


export class PortfolioRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: PortfolioRequestColorEnum;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}
