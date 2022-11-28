import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoUploadRequestResumable extends SpeakeasyBase {
    category?: number;
    channelId: number;
    commentsEnabled?: boolean;
    description?: string;
    downloadEnabled?: boolean;
    filename: string;
    language?: string;
    licence?: number;
    name: string;
    nsfw?: boolean;
    originallyPublishedAt?: Date;
    previewfile?: Uint8Array;
    privacy?: number;
    scheduleUpdate?: any;
    support?: string;
    tags?: string[];
    thumbnailfile?: Uint8Array;
    waitTranscoding?: boolean;
}
