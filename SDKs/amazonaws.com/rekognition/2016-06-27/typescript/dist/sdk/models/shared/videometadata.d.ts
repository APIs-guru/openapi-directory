import { SpeakeasyBase } from "../../../internal/utils";
import { VideoColorRangeEnum } from "./videocolorrangeenum";
/**
 * Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
**/
export declare class VideoMetadata extends SpeakeasyBase {
    codec?: string;
    colorRange?: VideoColorRangeEnum;
    durationMillis?: number;
    format?: string;
    frameHeight?: number;
    frameRate?: number;
    frameWidth?: number;
}
