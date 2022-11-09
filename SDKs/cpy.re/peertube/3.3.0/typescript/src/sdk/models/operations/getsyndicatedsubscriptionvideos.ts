import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSyndicatedSubscriptionVideosFormatEnum {
    Xml = "xml"
,    Rss = "rss"
,    Rss2 = "rss2"
,    Atom = "atom"
,    Atom1 = "atom1"
,    Json = "json"
,    Json1 = "json1"
}


export class GetSyndicatedSubscriptionVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedSubscriptionVideosFormatEnum;
}


export class GetSyndicatedSubscriptionVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetSyndicatedSubscriptionVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSyndicatedSubscriptionVideosPathParams;

  @Metadata()
  queryParams: GetSyndicatedSubscriptionVideosQueryParams;
}


export class GetSyndicatedSubscriptionVideosResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSyndicatedSubscriptionVideos204ApplicationJsonObject?: Map<string, any>;
}
