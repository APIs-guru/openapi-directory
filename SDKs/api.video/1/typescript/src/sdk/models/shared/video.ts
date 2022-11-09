import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoAssets } from "./videoassets";
import { Metadata } from "./metadata";
import { VideoSource } from "./videosource";


export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets?: VideoAssets;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=metadata", elemType: shared.Metadata })
  metadata?: Metadata[];

  @Metadata({ data: "json, name=mp4Support" })
  mp4Support?: boolean;

  @Metadata({ data: "json, name=panoramic" })
  panoramic?: boolean;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: string;

  @Metadata({ data: "json, name=source" })
  source?: VideoSource;

  @Metadata({ data: "json, name=tags" })
  tags?: any[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
