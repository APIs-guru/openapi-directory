import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PurchasesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PurchasesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class PurchasesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PurchasesDeletePathParams;

  @Metadata()
  queryParams: PurchasesDeleteQueryParams;
}


export class PurchasesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchasesDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
