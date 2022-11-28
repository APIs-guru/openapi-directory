import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PurchasesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PurchasesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class PurchasesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PurchasesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: PurchasesDeleteQueryParams;
}


export class PurchasesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchasesDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
