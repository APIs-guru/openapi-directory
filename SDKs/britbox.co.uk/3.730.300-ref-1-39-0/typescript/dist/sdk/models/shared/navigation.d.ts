import { SpeakeasyBase } from "../../../internal/utils";
import { NavEntry } from "./naventry";
export declare class Navigation extends SpeakeasyBase {
    account?: NavEntry;
    copyright?: string;
    customFields?: Map<string, any>;
    footer?: NavEntry;
    header: NavEntry[];
    mobile?: NavEntry;
}
