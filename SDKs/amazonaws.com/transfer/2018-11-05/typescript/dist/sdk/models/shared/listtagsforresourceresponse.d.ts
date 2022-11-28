import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    arn?: string;
    nextToken?: string;
    tags?: Tag[];
}
