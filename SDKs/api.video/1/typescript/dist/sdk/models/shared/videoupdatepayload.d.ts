import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
export declare class VideoUpdatePayload extends SpeakeasyBase {
    description?: string;
    metadata?: Metadata[];
    mp4Support?: boolean;
    panoramic?: boolean;
    playerId?: string;
    public?: boolean;
    tags?: string[];
    title?: string;
}
