import { SpeakeasyBase } from "../../../internal/utils";
import { IgnoresIgnoreResponse } from "./ignoresignoreresponse";
export declare class ForumPostResponse extends SpeakeasyBase {
    isPinned?: boolean;
    ignoreStatus?: IgnoresIgnoreResponse;
    isActive?: boolean;
    isAnnouncement?: boolean;
    lastReplyTimestamp?: Date;
    latestReplyAuthorId?: number;
    latestReplyPostId?: number;
    locale?: string;
    popularity?: number;
    thumbnail?: string;
    urlMediaType?: number;
    userHasMutedPost?: boolean;
    userHasRated?: boolean;
    userRating?: number;
}
