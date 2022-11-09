import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class NewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsPathParams;
}


export class News200ApplicationJsonEntries extends SpeakeasyBase {
  @Metadata({ data: "json, name=guidislink" })
  guidislink?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=links" })
  links?: string;

  @Metadata({ data: "json, name=published" })
  published?: string;

  @Metadata({ data: "json, name=published_parsed" })
  publishedParsed?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=sub_articles" })
  subArticles?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=summary_detail" })
  summaryDetail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=title_detail" })
  titleDetail?: string;
}


export class News200ApplicationJsonFeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=generator" })
  generator?: string;

  @Metadata({ data: "json, name=generator_detail" })
  generatorDetail?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=links" })
  links?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=publisher_detail" })
  publisherDetail?: string;

  @Metadata({ data: "json, name=rights" })
  rights?: string;

  @Metadata({ data: "json, name=rights_detail" })
  rightsDetail?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=subtitle_detail" })
  subtitleDetail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=updated_parsed" })
  updatedParsed?: string;
}


export class News200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: operations.News200ApplicationJsonEntries })
  entries?: News200ApplicationJsonEntries[];

  @Metadata({ data: "json, name=feed" })
  feed?: News200ApplicationJsonFeed;
}


export class NewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  news200ApplicationJsonObject?: News200ApplicationJson;

  @Metadata()
  statusCode: number;
}
