import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { CustomFieldSettingResponse } from "./customfieldsettingresponse";
export declare enum PortfolioResponseColorEnum {
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
export declare class PortfolioResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class PortfolioResponse extends SpeakeasyBase {
    color?: PortfolioResponseColorEnum;
    createdAt?: Date;
    createdBy?: UserCompact;
    customFieldSettings?: CustomFieldSettingResponse[];
    dueOn?: Date;
    gid?: string;
    members?: UserCompact[];
    name?: string;
    owner?: UserCompact;
    permalinkUrl?: string;
    resourceType?: string;
    startOn?: Date;
    workspace?: PortfolioResponseWorkspace;
}
