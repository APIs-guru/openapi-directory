import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
export declare enum ProjectStatusResponseColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
export declare class ProjectStatusResponse extends SpeakeasyBase {
    author?: UserCompact;
    color: ProjectStatusResponseColorEnum;
    createdAt?: Date;
    createdBy?: UserCompact;
    gid?: string;
    htmlText?: string;
    modifiedAt?: Date;
    resourceType?: string;
    text: string;
    title?: string;
}
