import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoUploadRequestResumable extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: number;

  @Metadata({ data: "json, name=channelId" })
  channelId: number;

  @Metadata({ data: "json, name=commentsEnabled" })
  commentsEnabled?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=downloadEnabled" })
  downloadEnabled?: boolean;

  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=licence" })
  licence?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @Metadata({ data: "json, name=originallyPublishedAt" })
  originallyPublishedAt?: Date;

  @Metadata({ data: "json, name=previewfile" })
  previewfile?: Uint8Array;

  @Metadata({ data: "json, name=privacy" })
  privacy?: number;

  @Metadata({ data: "json, name=scheduleUpdate" })
  scheduleUpdate?: any;

  @Metadata({ data: "json, name=support" })
  support?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=thumbnailfile" })
  thumbnailfile?: Uint8Array;

  @Metadata({ data: "json, name=waitTranscoding" })
  waitTranscoding?: boolean;
}
