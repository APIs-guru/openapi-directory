import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
export declare enum ProjectRequestColorEnum {
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
export declare enum ProjectRequestCurrentStatusColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
export declare class ProjectRequestCurrentStatusInput extends SpeakeasyBase {
    author?: UserCompactInput;
    color: ProjectRequestCurrentStatusColorEnum;
    createdBy?: UserCompactInput;
    htmlText?: string;
    text: string;
    title?: string;
}
export declare enum ProjectRequestDefaultViewEnum {
    List = "list",
    Board = "board",
    Calendar = "calendar",
    Timeline = "timeline"
}
export declare class ProjectRequestWorkspaceInput extends SpeakeasyBase {
    name?: string;
}
export declare class ProjectRequestInput extends SpeakeasyBase {
    archived?: boolean;
    color?: ProjectRequestColorEnum;
    currentStatus?: ProjectRequestCurrentStatusInput;
    customFields?: Map<string, string>;
    defaultView?: ProjectRequestDefaultViewEnum;
    dueDate?: Date;
    dueOn?: Date;
    followers?: string;
    htmlNotes?: string;
    isTemplate?: boolean;
    name?: string;
    notes?: string;
    owner?: string;
    public?: boolean;
    startOn?: Date;
    team?: string;
    workspace?: ProjectRequestWorkspaceInput;
}
