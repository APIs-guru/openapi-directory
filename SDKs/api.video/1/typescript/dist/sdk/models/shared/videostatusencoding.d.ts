import { SpeakeasyBase } from "../../../internal/utils";
import { VideostatusEncodingMetadata } from "./videostatusencodingmetadata";
import { Quality } from "./quality";
export declare class VideostatusEncoding extends SpeakeasyBase {
    metadata?: VideostatusEncodingMetadata;
    playable?: boolean;
    qualities?: Quality[];
}
