import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide.
**/
export declare class ModerationLabel extends SpeakeasyBase {
    confidence?: number;
    name?: string;
    parentName?: string;
}
