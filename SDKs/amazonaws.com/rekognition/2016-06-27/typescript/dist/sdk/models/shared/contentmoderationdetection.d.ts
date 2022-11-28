import { SpeakeasyBase } from "../../../internal/utils";
import { ModerationLabel } from "./moderationlabel";
/**
 * Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
**/
export declare class ContentModerationDetection extends SpeakeasyBase {
    moderationLabel?: ModerationLabel;
    timestamp?: number;
}
