import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { VideoStreamingPlaylists } from "./videostreamingplaylists";
export declare class VideoDetailsScheduledUpdate extends SpeakeasyBase {
    privacy?: number;
    updateAt: Date;
}
export declare class VideoDetailsUserHistory extends SpeakeasyBase {
    currentTime?: number;
}
export declare class VideoDetails extends SpeakeasyBase {
    account?: Account;
    blacklisted?: boolean;
    blacklistedReason?: string;
    category?: any;
    channel?: any;
    commentsEnabled?: boolean;
    createdAt?: Date;
    description?: string;
    descriptionPath?: string;
    dislikes?: number;
    downloadEnabled?: boolean;
    duration?: number;
    embedPath?: string;
    files?: any[];
    id?: number;
    isLive?: boolean;
    isLocal?: boolean;
    language?: any;
    licence?: any;
    likes?: number;
    name?: string;
    nsfw?: boolean;
    originallyPublishedAt?: Date;
    previewPath?: string;
    privacy?: any;
    publishedAt?: Date;
    scheduledUpdate?: VideoDetailsScheduledUpdate;
    shortUuid?: string;
    state?: any;
    streamingPlaylists?: VideoStreamingPlaylists[];
    support?: string;
    tags?: string[];
    thumbnailPath?: string;
    trackerUrls?: string[];
    updatedAt?: Date;
    userHistory?: VideoDetailsUserHistory;
    uuid?: string;
    views?: number;
    waitTranscoding?: boolean;
}
