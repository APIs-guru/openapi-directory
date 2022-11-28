import { SpeakeasyBase } from "../../../internal/utils";
import { ChildTypeEnum } from "./childtypeenum";
export declare class ListChildrenRequest extends SpeakeasyBase {
    childType: ChildTypeEnum;
    maxResults?: number;
    nextToken?: string;
    parentId: string;
}
