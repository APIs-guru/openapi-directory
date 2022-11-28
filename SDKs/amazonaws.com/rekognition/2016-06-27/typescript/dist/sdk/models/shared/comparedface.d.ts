import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { Emotion } from "./emotion";
import { Landmark } from "./landmark";
import { Pose } from "./pose";
import { ImageQuality } from "./imagequality";
import { Smile } from "./smile";
/**
 * Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
**/
export declare class ComparedFace extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
    emotions?: Emotion[];
    landmarks?: Landmark[];
    pose?: Pose;
    quality?: ImageQuality;
    smile?: Smile;
}
