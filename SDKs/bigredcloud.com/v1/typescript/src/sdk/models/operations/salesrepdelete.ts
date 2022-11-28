import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SalesRepDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesRepDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesRepDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesRepDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SalesRepDeleteQueryParams;
}


export class SalesRepDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesRepDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
