import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CustomersDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CustomersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersDeletePathParams;

  @Metadata()
  queryParams: CustomersDeleteQueryParams;
}


export class CustomersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customersDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
