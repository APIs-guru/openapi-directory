import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * The response from listing tags.
**/
export declare class ListTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tags?: Tag[];
}
