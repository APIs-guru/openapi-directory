import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A filter that allows you to control the black frame detection by specifying the black levels and pixel coverage of black pixels in a frame. As videos can come from multiple sources, formats, and time periods, they may contain different standards and varying noise levels for black frames that need to be accounted for. For more information, see <a>StartSegmentDetection</a>.
**/
export declare class BlackFrame extends SpeakeasyBase {
    maxPixelThreshold?: number;
    minCoveragePercentage?: number;
}
