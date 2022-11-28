import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CrawlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class Crawl200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}


export class CrawlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CrawlPathParams;
}


export class CrawlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  crawl200ApplicationJsonObject?: Crawl200ApplicationJson;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
