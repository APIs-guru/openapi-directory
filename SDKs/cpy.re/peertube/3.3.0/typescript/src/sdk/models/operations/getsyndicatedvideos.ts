import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSyndicatedVideosFormatEnum {
    Xml = "xml"
,    Rss = "rss"
,    Rss2 = "rss2"
,    Atom = "atom"
,    Atom1 = "atom1"
,    Json = "json"
,    Json1 = "json1"
}


export class GetSyndicatedVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedVideosFormatEnum;
}


export class GetSyndicatedVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=accountName" })
  accountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" })
  videoChannelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" })
  videoChannelName?: string;
}


export class GetSyndicatedVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSyndicatedVideosPathParams;

  @Metadata()
  queryParams: GetSyndicatedVideosQueryParams;
}


export class GetSyndicatedVideosResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSyndicatedVideos204ApplicationJsonObject?: Map<string, any>;
}
