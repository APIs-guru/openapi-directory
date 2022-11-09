import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SalesRepDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesRepDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesRepDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesRepDeletePathParams;

  @Metadata()
  queryParams: SalesRepDeleteQueryParams;
}


export class SalesRepDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesRepDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
