import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { VideoStreamingPlaylists } from "./videostreamingplaylists";



export class VideoDetailsScheduledUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: number;

  @SpeakeasyMetadata({ data: "json, name=updateAt" })
  updateAt: Date;
}


export class VideoDetailsUserHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentTime" })
  currentTime?: number;
}


export class VideoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account;

  @SpeakeasyMetadata({ data: "json, name=blacklisted" })
  blacklisted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blacklistedReason" })
  blacklistedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: any;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: any;

  @SpeakeasyMetadata({ data: "json, name=commentsEnabled" })
  commentsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionPath" })
  descriptionPath?: string;

  @SpeakeasyMetadata({ data: "json, name=dislikes" })
  dislikes?: number;

  @SpeakeasyMetadata({ data: "json, name=downloadEnabled" })
  downloadEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=embedPath" })
  embedPath?: string;

  @SpeakeasyMetadata({ data: "json, name=files" })
  files?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLocal" })
  isLocal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: any;

  @SpeakeasyMetadata({ data: "json, name=licence" })
  licence?: any;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nsfw" })
  nsfw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=originallyPublishedAt" })
  originallyPublishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=previewPath" })
  previewPath?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: any;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduledUpdate" })
  scheduledUpdate?: VideoDetailsScheduledUpdate;

  @SpeakeasyMetadata({ data: "json, name=shortUUID" })
  shortUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: any;

  @SpeakeasyMetadata({ data: "json, name=streamingPlaylists", elemType: VideoStreamingPlaylists })
  streamingPlaylists?: VideoStreamingPlaylists[];

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailPath" })
  thumbnailPath?: string;

  @SpeakeasyMetadata({ data: "json, name=trackerUrls" })
  trackerUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=userHistory" })
  userHistory?: VideoDetailsUserHistory;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=views" })
  views?: number;

  @SpeakeasyMetadata({ data: "json, name=waitTranscoding" })
  waitTranscoding?: boolean;
}
