import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CashReceiptsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashReceiptsDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CashReceiptsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CashReceiptsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: CashReceiptsDeleteQueryParams;
}


export class CashReceiptsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashReceiptsDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
