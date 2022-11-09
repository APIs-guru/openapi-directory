import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SerpRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SerpData;
}


export class Serp200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=searched_results" })
  searchedResults?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}


export class SerpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  serp200ApplicationJsonObject?: Serp200ApplicationJson;
}
