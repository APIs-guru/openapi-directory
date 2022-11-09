import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";
import { VideoStreamingPlaylists } from "./videostreamingplaylists";


export class VideoDetailsScheduledUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacy" })
  privacy?: number;

  @Metadata({ data: "json, name=updateAt" })
  updateAt: Date;
}


export class VideoDetailsUserHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentTime" })
  currentTime?: number;
}


export class VideoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=blacklisted" })
  blacklisted?: boolean;

  @Metadata({ data: "json, name=blacklistedReason" })
  blacklistedReason?: string;

  @Metadata({ data: "json, name=category" })
  category?: any;

  @Metadata({ data: "json, name=channel" })
  channel?: any;

  @Metadata({ data: "json, name=commentsEnabled" })
  commentsEnabled?: boolean;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptionPath" })
  descriptionPath?: string;

  @Metadata({ data: "json, name=dislikes" })
  dislikes?: number;

  @Metadata({ data: "json, name=downloadEnabled" })
  downloadEnabled?: boolean;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=embedPath" })
  embedPath?: string;

  @Metadata({ data: "json, name=files" })
  files?: any[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @Metadata({ data: "json, name=isLocal" })
  isLocal?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: any;

  @Metadata({ data: "json, name=licence" })
  licence?: any;

  @Metadata({ data: "json, name=likes" })
  likes?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @Metadata({ data: "json, name=originallyPublishedAt" })
  originallyPublishedAt?: Date;

  @Metadata({ data: "json, name=previewPath" })
  previewPath?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: any;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=scheduledUpdate" })
  scheduledUpdate?: VideoDetailsScheduledUpdate;

  @Metadata({ data: "json, name=shortUUID" })
  shortUuid?: string;

  @Metadata({ data: "json, name=state" })
  state?: any;

  @Metadata({ data: "json, name=streamingPlaylists", elemType: shared.VideoStreamingPlaylists })
  streamingPlaylists?: VideoStreamingPlaylists[];

  @Metadata({ data: "json, name=support" })
  support?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=thumbnailPath" })
  thumbnailPath?: string;

  @Metadata({ data: "json, name=trackerUrls" })
  trackerUrls?: string[];

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=userHistory" })
  userHistory?: VideoDetailsUserHistory;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=views" })
  views?: number;

  @Metadata({ data: "json, name=waitTranscoding" })
  waitTranscoding?: boolean;
}
