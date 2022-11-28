import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>ListTagsForStream</code>.
**/
export declare class ListTagsForStreamInput extends SpeakeasyBase {
    exclusiveStartTagKey?: string;
    limit?: number;
    streamName: string;
}
