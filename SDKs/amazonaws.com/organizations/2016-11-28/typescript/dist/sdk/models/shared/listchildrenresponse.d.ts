import { SpeakeasyBase } from "../../../internal/utils";
import { Child } from "./child";
export declare class ListChildrenResponse extends SpeakeasyBase {
    children?: Child[];
    nextToken?: string;
}
