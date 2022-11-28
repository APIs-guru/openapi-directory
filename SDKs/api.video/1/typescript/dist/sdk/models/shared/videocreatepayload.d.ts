import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
export declare class VideoCreatePayload extends SpeakeasyBase {
    description?: string;
    metadata?: Metadata[];
    mp4Support?: boolean;
    panoramic?: boolean;
    playerId?: string;
    public?: boolean;
    publishedAt?: Date;
    source?: string;
    tags?: string[];
    title: string;
}
