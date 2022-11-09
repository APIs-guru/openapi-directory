import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;
}


export class GetSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchQueryParams;

  @Metadata()
  security: GetSearchSecurity;
}


export class GetSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSearch200ApplicationJsonAny?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
