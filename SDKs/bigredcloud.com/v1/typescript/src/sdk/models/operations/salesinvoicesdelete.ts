import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SalesInvoicesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesInvoicesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesInvoicesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesInvoicesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SalesInvoicesDeleteQueryParams;
}


export class SalesInvoicesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesInvoicesDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
