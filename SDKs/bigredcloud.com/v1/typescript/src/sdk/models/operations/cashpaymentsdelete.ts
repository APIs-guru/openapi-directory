import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CashPaymentsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashPaymentsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CashPaymentsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CashPaymentsDeletePathParams;

  @Metadata()
  queryParams: CashPaymentsDeleteQueryParams;
}


export class CashPaymentsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  cashPaymentsDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
