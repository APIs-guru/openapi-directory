import { SpeakeasyBase } from "../../../internal/utils";
import { NavContent } from "./navcontent";
export declare class NavEntry extends SpeakeasyBase {
    children?: NavEntry[];
    content?: NavContent;
    customFields?: Map<string, any>;
    depth: number;
    featured?: boolean;
    icon?: string;
    label?: string;
    path?: string;
}
