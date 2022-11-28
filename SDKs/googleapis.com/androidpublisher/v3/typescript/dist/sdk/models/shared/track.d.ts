import { SpeakeasyBase } from "../../../internal/utils";
import { TrackRelease } from "./trackrelease";
/**
 * A track configuration. The resource for TracksService.
**/
export declare class Track extends SpeakeasyBase {
    releases?: TrackRelease[];
    track?: string;
}
