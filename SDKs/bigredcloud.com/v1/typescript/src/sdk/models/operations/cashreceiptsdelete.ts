import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CashReceiptsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashReceiptsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CashReceiptsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CashReceiptsDeletePathParams;

  @Metadata()
  queryParams: CashReceiptsDeleteQueryParams;
}


export class CashReceiptsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  cashReceiptsDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
