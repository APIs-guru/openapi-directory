import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PortfolioRequestColorEnum {
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


export class PortfolioRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: PortfolioRequestColorEnum;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=members" })
  members?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=workspace" })
  workspace?: string;
}
