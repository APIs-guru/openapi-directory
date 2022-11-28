import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class News200ApplicationJsonEntries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guidislink" })
  guidislink?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: string;

  @SpeakeasyMetadata({ data: "json, name=published_parsed" })
  publishedParsed?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=sub_articles" })
  subArticles?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=summary_detail" })
  summaryDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=title_detail" })
  titleDetail?: string;
}


export class News200ApplicationJsonFeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=generator" })
  generator?: string;

  @SpeakeasyMetadata({ data: "json, name=generator_detail" })
  generatorDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_detail" })
  publisherDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=rights" })
  rights?: string;

  @SpeakeasyMetadata({ data: "json, name=rights_detail" })
  rightsDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle_detail" })
  subtitleDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_parsed" })
  updatedParsed?: string;
}


export class News200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: News200ApplicationJsonEntries })
  entries?: News200ApplicationJsonEntries[];

  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed?: News200ApplicationJsonFeed;
}


export class NewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsPathParams;
}


export class NewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  news200ApplicationJsonObject?: News200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
