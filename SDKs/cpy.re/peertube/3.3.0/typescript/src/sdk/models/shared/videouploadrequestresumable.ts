import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoUploadRequestResumable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: number;

  @SpeakeasyMetadata({ data: "json, name=commentsEnabled" })
  commentsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadEnabled" })
  downloadEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=licence" })
  licence?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=originallyPublishedAt" })
  originallyPublishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=previewfile" })
  previewfile?: Uint8Array;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleUpdate" })
  scheduleUpdate?: any;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailfile" })
  thumbnailfile?: Uint8Array;

  @SpeakeasyMetadata({ data: "json, name=waitTranscoding" })
  waitTranscoding?: boolean;
}
