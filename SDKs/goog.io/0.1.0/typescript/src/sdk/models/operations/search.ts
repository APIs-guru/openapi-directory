import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchPathParams;
}


export class Search200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


// Search200ApplicationJson
/** 
 * results
**/
export class Search200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=results", elemType: operations.Search200ApplicationJsonResults })
  results?: Search200ApplicationJsonResults[];

  @Metadata({ data: "json, name=total" })
  total?: string;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  search200ApplicationJsonObject?: Search200ApplicationJson;

  @Metadata()
  statusCode: number;
}
