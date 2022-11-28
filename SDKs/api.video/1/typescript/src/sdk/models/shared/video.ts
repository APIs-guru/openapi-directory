import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoAssets } from "./videoassets";
import { Metadata } from "./metadata";
import { VideoSource } from "./videosource";



export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: VideoAssets;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: Metadata })
  metadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=mp4Support" })
  mp4Support?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panoramic" })
  panoramic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: VideoSource;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
