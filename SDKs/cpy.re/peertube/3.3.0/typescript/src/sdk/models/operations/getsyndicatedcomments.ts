import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSyndicatedCommentsFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}


export class GetSyndicatedCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedCommentsFormatEnum;
}


export class GetSyndicatedCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" })
  videoChannelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" })
  videoChannelName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoId" })
  videoId?: string;
}


export class GetSyndicatedCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyndicatedCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSyndicatedCommentsQueryParams;
}


export class GetSyndicatedCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyndicatedComments204ApplicationJsonObject?: Map<string, any>;
}
