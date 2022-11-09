import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SalesInvoicesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesInvoicesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesInvoicesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesInvoicesDeletePathParams;

  @Metadata()
  queryParams: SalesInvoicesDeleteQueryParams;
}


export class SalesInvoicesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoicesDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
