import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSyndicatedVideosFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}


export class GetSyndicatedVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedVideosFormatEnum;
}


export class GetSyndicatedVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" })
  videoChannelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" })
  videoChannelName?: string;
}


export class GetSyndicatedVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyndicatedVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSyndicatedVideosQueryParams;
}


export class GetSyndicatedVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyndicatedVideos204ApplicationJsonObject?: Map<string, any>;
}
