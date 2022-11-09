import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayMediaControlCommandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookmarkTrack" })
  bookmarkTrack?: boolean;

  @Metadata({ data: "json, name=dislikeTrack" })
  dislikeTrack?: boolean;

  @Metadata({ data: "json, name=likeTrack" })
  likeTrack?: boolean;

  @Metadata({ data: "json, name=nextTrack" })
  nextTrack?: boolean;

  @Metadata({ data: "json, name=preferSkipBackward" })
  preferSkipBackward?: boolean;

  @Metadata({ data: "json, name=preferSkipForward" })
  preferSkipForward?: boolean;

  @Metadata({ data: "json, name=previousTrack" })
  previousTrack?: boolean;

  @Metadata({ data: "json, name=seekToPlaybackPosition" })
  seekToPlaybackPosition?: boolean;

  @Metadata({ data: "json, name=skipBackward" })
  skipBackward?: boolean;

  @Metadata({ data: "json, name=skipForward" })
  skipForward?: boolean;
}
