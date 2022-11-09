import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryDbQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class QueryDbRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QueryDbQueryParams;
}


export class QueryDbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  queryDb200ApplicationJsonObject?: Map<string, any>;
}
