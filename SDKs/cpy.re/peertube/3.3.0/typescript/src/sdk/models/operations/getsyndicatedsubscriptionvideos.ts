import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSyndicatedSubscriptionVideosFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}


export class GetSyndicatedSubscriptionVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedSubscriptionVideosFormatEnum;
}


export class GetSyndicatedSubscriptionVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetSyndicatedSubscriptionVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyndicatedSubscriptionVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSyndicatedSubscriptionVideosQueryParams;
}


export class GetSyndicatedSubscriptionVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyndicatedSubscriptionVideos204ApplicationJsonObject?: Map<string, any>;
}
