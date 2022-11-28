import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IgnoresIgnoreResponse } from "./ignoresignoreresponse";



export class ForumPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isPinned?: boolean;

  @SpeakeasyMetadata()
  ignoreStatus?: IgnoresIgnoreResponse;

  @SpeakeasyMetadata()
  isActive?: boolean;

  @SpeakeasyMetadata()
  isAnnouncement?: boolean;

  @SpeakeasyMetadata()
  lastReplyTimestamp?: Date;

  @SpeakeasyMetadata()
  latestReplyAuthorId?: number;

  @SpeakeasyMetadata()
  latestReplyPostId?: number;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  popularity?: number;

  @SpeakeasyMetadata()
  thumbnail?: string;

  @SpeakeasyMetadata()
  urlMediaType?: number;

  @SpeakeasyMetadata()
  userHasMutedPost?: boolean;

  @SpeakeasyMetadata()
  userHasRated?: boolean;

  @SpeakeasyMetadata()
  userRating?: number;
}
