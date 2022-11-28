import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectStatusRequestColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
export declare class ProjectStatusRequestInput extends SpeakeasyBase {
    color: ProjectStatusRequestColorEnum;
    htmlText?: string;
    text: string;
    title?: string;
}
