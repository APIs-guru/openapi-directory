import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;
}


export class Search200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Search200ApplicationJson
/** 
 * results
**/
export class Search200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Search200ApplicationJsonResults })
  results?: Search200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: string;
}


export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchPathParams;
}


export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  search200ApplicationJsonObject?: Search200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
