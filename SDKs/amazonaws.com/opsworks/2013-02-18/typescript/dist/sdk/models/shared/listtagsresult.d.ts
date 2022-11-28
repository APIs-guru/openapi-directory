import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a <code>ListTags</code> request.
**/
export declare class ListTagsResult extends SpeakeasyBase {
    nextToken?: string;
    tags?: Map<string, string>;
}
