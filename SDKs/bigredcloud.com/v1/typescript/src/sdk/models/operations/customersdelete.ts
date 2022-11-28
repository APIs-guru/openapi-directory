import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CustomersDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CustomersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: CustomersDeleteQueryParams;
}


export class CustomersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customersDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
