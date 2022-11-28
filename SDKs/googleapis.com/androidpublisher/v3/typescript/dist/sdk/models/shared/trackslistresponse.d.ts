import { SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";
/**
 * Response listing all tracks.
**/
export declare class TracksListResponse extends SpeakeasyBase {
    kind?: string;
    tracks?: Track[];
}
