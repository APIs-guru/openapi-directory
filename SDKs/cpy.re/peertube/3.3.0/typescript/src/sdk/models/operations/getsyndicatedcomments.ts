import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSyndicatedCommentsFormatEnum {
    Xml = "xml"
,    Rss = "rss"
,    Rss2 = "rss2"
,    Atom = "atom"
,    Atom1 = "atom1"
,    Json = "json"
,    Json1 = "json1"
}


export class GetSyndicatedCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetSyndicatedCommentsFormatEnum;
}


export class GetSyndicatedCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=accountName" })
  accountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoChannelId" })
  videoChannelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoChannelName" })
  videoChannelName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoId" })
  videoId?: string;
}


export class GetSyndicatedCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSyndicatedCommentsPathParams;

  @Metadata()
  queryParams: GetSyndicatedCommentsQueryParams;
}


export class GetSyndicatedCommentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSyndicatedComments204ApplicationJsonObject?: Map<string, any>;
}
