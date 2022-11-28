import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Represents the output for <code>ListTagsForStream</code>.
**/
export declare class ListTagsForStreamOutput extends SpeakeasyBase {
    hasMoreTags: boolean;
    tags: Tag[];
}
