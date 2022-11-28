import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryDbQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class QueryDbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QueryDbQueryParams;
}


export class QueryDbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queryDb200ApplicationJsonObject?: Map<string, any>;
}
