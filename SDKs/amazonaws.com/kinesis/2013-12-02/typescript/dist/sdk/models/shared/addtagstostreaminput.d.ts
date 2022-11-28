import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>AddTagsToStream</code>.
**/
export declare class AddTagsToStreamInput extends SpeakeasyBase {
    streamName: string;
    tags: Map<string, string>;
}
