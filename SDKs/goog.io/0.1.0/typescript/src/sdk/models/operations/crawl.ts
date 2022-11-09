import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CrawlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class CrawlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CrawlPathParams;
}


export class Crawl200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=results" })
  results?: string[];

  @Metadata({ data: "json, name=total" })
  total?: string;
}


export class CrawlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  crawl200ApplicationJsonObject?: Crawl200ApplicationJson;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
