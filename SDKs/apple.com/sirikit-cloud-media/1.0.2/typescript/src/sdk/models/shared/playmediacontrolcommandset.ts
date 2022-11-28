import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayMediaControlCommandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookmarkTrack" })
  bookmarkTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dislikeTrack" })
  dislikeTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=likeTrack" })
  likeTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nextTrack" })
  nextTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preferSkipBackward" })
  preferSkipBackward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=preferSkipForward" })
  preferSkipForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=previousTrack" })
  previousTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seekToPlaybackPosition" })
  seekToPlaybackPosition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipBackward" })
  skipBackward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipForward" })
  skipForward?: boolean;
}
