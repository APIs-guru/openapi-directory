import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAssets } from "./videoassets";
import { Metadata } from "./metadata";
import { VideoSource } from "./videosource";
export declare class Video extends SpeakeasyBase {
    assets?: VideoAssets;
    description?: string;
    metadata?: Metadata[];
    mp4Support?: boolean;
    panoramic?: boolean;
    playerId?: string;
    public?: boolean;
    publishedAt?: string;
    source?: VideoSource;
    tags?: any[];
    title?: string;
    updatedAt?: Date;
    videoId?: string;
}
