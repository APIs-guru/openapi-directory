import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PaymentsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PaymentsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class PaymentsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PaymentsDeletePathParams;

  @Metadata()
  queryParams: PaymentsDeleteQueryParams;
}


export class PaymentsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentsDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
